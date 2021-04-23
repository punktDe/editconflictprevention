<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Domain\Repository;

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Domain\Service\NodeTypeManager;
use Doctrine\ORM\EntityManagerInterface;
use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\ContentRepository\Domain\Model\Workspace;
use Neos\Flow\Persistence\Repository;
use PunktDe\EditConflictPrevention\Service\WorkspaceService;

/**
 * @Flow\Scope("singleton")
 */
class NodeDataRepository extends Repository
{
    public const ENTITY_CLASSNAME = NodeData::class;

    private const NODETYPE_CONTENT_COLLECTION = 'Neos.Neos:ContentCollection';

    /**
     * @Flow\Inject
     * @var EntityManagerInterface
     */
    protected $entityManager;

    /**
     * @Flow\Inject
     * @var NodeTypeManager
     */
    protected $nodeTypeManager;

    /**
     * @Flow\Inject
     * @var WorkspaceService
     */
    protected $workspaceService;

    /**
     * First get all content collection nodes which are a direct child of the given document.
     * Then get all nodes that are children of that path
     *
     * @param NodeInterface $documentNode
     * @param Workspace $userWorkspace
     * @param bool $ignoreInternalAndPrivateWorkspaces
     * @return NodeData[]
     * @throws \Neos\ContentRepository\Exception\NodeTypeNotFoundException
     */
    public function findChangedSubNodesInOtherWorkspaces(NodeInterface $documentNode, Workspace $userWorkspace, bool $ignoreInternalAndPrivateWorkspaces = true): array
    {
        $contentCollectionNodeTypes = array_merge([$this->nodeTypeManager->getNodeType(self::NODETYPE_CONTENT_COLLECTION)], $this->nodeTypeManager->getSubNodeTypes(self::NODETYPE_CONTENT_COLLECTION));

        $queryBuilder = $this->entityManager->createQueryBuilder();
        $queryBuilder->select('n.path')
            ->from(NodeData::class, 'n')
            ->andWhere('n.parentPathHash = :parentpathhash')
            ->andWhere($queryBuilder->expr()->in('n.nodeType', $contentCollectionNodeTypes))
            ->setParameters([
                ':parentpathhash' => md5($documentNode->getPath())
            ]);

        $contentCollectionPaths = array_unique(array_column($queryBuilder->getQuery()->execute(), 'path'));

        // Either the documentNode has no content collection or the documentNode is just created and not persisted yet
        if (empty($contentCollectionPaths)) {
            return [];
        }

        $ignoredWorkspaces = ['live'];
        if ($ignoreInternalAndPrivateWorkspaces) {
            $ignoredWorkspaces = array_merge(
                $ignoredWorkspaces,
                $this->workspaceService->getInternalWorkspaceNames(),
                $this->workspaceService->getPrivateWorkspaceNames()
            );
        }

        $queryBuilder = $this->entityManager->createQueryBuilder();
        $queryBuilder->select('n')
            ->from(NodeData::class, 'n')
            ->where('n.workspace != :userWorkspace')
            ->andWhere($queryBuilder->expr()->not($queryBuilder->expr()->in('n.workspace', ':ignoredWorkspaces')))
            ->andWhere('n.dimensionsHash = :dimensionsHash');

        $queryBuilder->setParameters([
            ':userWorkspace' => $userWorkspace->getName(),
            ':ignoredWorkspaces' => $ignoredWorkspaces,
            ':dimensionsHash' => $documentNode->getNodeData()->getDimensionsHash(),
        ]);

        $pathCandidates = [];

        foreach (array_unique($contentCollectionPaths) as $contentCollectionPath) {
            $pathParameterName = ':ccp_' . md5($contentCollectionPath);
            $pathCandidates[] = $queryBuilder->expr()->like('n.path', $pathParameterName);
            $queryBuilder->setParameter($pathParameterName, $contentCollectionPath . '%');
        }

        $pathCandidates[] = $queryBuilder->expr()->eq('n.path', ':documentPath');
        $queryBuilder->setParameter(':documentPath', $documentNode->getPath());

        $queryBuilder->andWhere(implode(' OR ', $pathCandidates));

        return $queryBuilder->getQuery()->execute();
    }
}
