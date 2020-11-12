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

/**
 * @Flow\Scope("singleton")
 */
class NodeDataRepository extends Repository
{
    public const ENTITY_CLASSNAME = NodeData::class;

    private const NODETYPE_CONNTENT_COLLECTION = 'Neos.Neos:ContentCollection';

    /**
     * @Flow\Inject
     * @var EntityManagerInterface
     */
    protected $entityManager;

    /**
     * @Flow\Inject
     * @var NodeTypeManager
     */
    protected $nodeTypeMananger;

    /**
     * First get all content collection nodes which are a direct child of the given document.
     * Then get all nodes that are children of that path
     *
     * @param NodeInterface $documentNode
     * @param Workspace $userWorkspace
     * @return NodeData[]
     */
    public function findChangedSubNodesInOtherWorkspaces(NodeInterface $documentNode, Workspace $userWorkspace): array
    {
        $contentCollectionNodeTypes = $this->nodeTypeMananger->getSubNodeTypes(self::NODETYPE_CONNTENT_COLLECTION);

        $queryBuilder = $this->entityManager->createQueryBuilder();
        $queryBuilder->select('n.path')
            ->from(NodeData::class, 'n')
            ->andWhere('n.parentPathHash = :parentpathhash')
            ->andWhere($queryBuilder->expr()->in('n.nodeType', $contentCollectionNodeTypes))
            ->setParameters([
                ':parentpathhash' => md5($documentNode->getPath())
            ]);

        $contentCollectionPaths = array_unique(array_column($queryBuilder->getQuery()->execute(), 'path'));

        // Either the documentNode has no content collection or the documentNot is just created and not persisted yet
        if (empty($contentCollectionPaths)) {
            return [];
        }

        $queryBuilder = $this->entityManager->createQueryBuilder();
        $queryBuilder->select('n')
            ->from(NodeData::class, 'n')
            ->where('n.workspace != :userWorkspace')
            ->andWhere('n.workspace != :liveWorkspace')
            ->andWhere('n.dimensionsHash = :dimensionsHash');

        $queryBuilder->setParameters([
            ':userWorkspace' => $userWorkspace->getName(),
            ':liveWorkspace' => 'live',
            ':dimensionsHash' => $documentNode->getNodeData()->getDimensionsHash(),
        ]);

        $pathCandidates = [];
        foreach (array_unique($contentCollectionPaths) as $contentCollectionPath) {
            $pathParameterName = ':x' . md5($contentCollectionPath);
            $pathCandidates[] = $queryBuilder->expr()->like('n.path', $pathParameterName);
            $queryBuilder->setParameter($pathParameterName, $contentCollectionPath . '/%');
        }

        $queryBuilder->andWhere(implode(' OR ', $pathCandidates));

        return $queryBuilder->getQuery()->execute();
    }
}
