<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Domain;

use Neos\ContentRepository\Domain\Factory\NodeFactory;
use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\ContentRepository\Domain\Service\Context;
use Neos\ContentRepository\Domain\Service\ContextFactory;
use Neos\Eel\FlowQuery\FlowQuery;
use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Log\Utility\LogEnvironment;
use Neos\Flow\Utility\Now;
use Neos\Neos\Service\UserService;
use Psr\Log\LoggerInterface;
use PunktDe\EditConflictPrevention\Domain\Dto\ChangedNode;
use PunktDe\EditConflictPrevention\Domain\Repository\NodeDataRepository;

/**
 * @Flow\Scope("singleton")
 */
class ChangedNodesCalculator
{

    private const NODETYPE_NEOS_DOCUMENT = 'Neos.Neos:Document';

    public const CHANGE_TYPE_CREATED = 'created';
    public const CHANGE_TYPE_CHANGED = 'changed';
    public const CHANGE_TYPE_REMOVED = 'removed';

    /**
     * @Flow\Inject
     * @var NodeDataRepository
     */
    protected $nodeDataRepository;

    /**
     * @Flow\Inject
     * @var UserService
     */
    protected $userService;

    /**
     * @Flow\Inject
     * @var ContextFactory
     */
    protected $contextFactory;

    /**
     * @Flow\Inject
     * @var NodeFactory
     */
    protected $nodeFactory;

    /**
     * @var NodeData[][]
     */
    protected $changedNodeDataForDocument = [];

    /**
     * @var ChangedNodeCollection[]
     */
    protected $calculatedChangesForDocument = [];

    /**
     * @var NodeInterface[]
     */
    protected $firstLevelDocumentNodeCache = [];

    /**
     * @Flow\Inject
     * @var LoggerInterface
     */
    protected $logger;

    /**
     * @var array
     * @Flow\InjectConfiguration(package="PunktDe.EditConflictPrevention", path="excludedDocumentTypes")
     */
    protected $excludedDocumentTypes = [];

    /**
     * @param NodeInterface $documentNode
     * @return ChangedNodeCollection
     * @throws \Neos\ContentRepository\Exception\NodeConfigurationException
     */
    public function calculateChangesForDocument(NodeInterface $documentNode): ChangedNodeCollection
    {
        $changedNodes = new ChangedNodeCollection();

        if (isset($this->calculatedChangesForDocument[(string)$documentNode])) {
            return $this->calculatedChangesForDocument[(string)$documentNode];
        }

        foreach ($this->findChangedNodeDataForDocument($documentNode) as $nodeData) {

            $context = $this->contextFactory->create([
                'workspaceName' => $nodeData->getWorkspace()->getName(),
                'currentDateTime' => new Now(),
                'dimensions' => $documentNode->getContext()->getDimensions(),
                'targetDimensions' => $documentNode->getContext()->getTargetDimensions(),
                'invisibleContentShown' => true,
                'removedContentShown' => true,
                'inaccessibleContentShown' => true,
            ]);

            $node = $this->nodeFactory->createFromNodeData($nodeData, $context);

            if (!$node instanceof NodeInterface) {
                continue;
            }

            $changedNodes->add(new ChangedNode(
                $node,
                $this->calculateChangeTypeForNode($node, $documentNode->getContext())
            ));
        }

        $this->calculatedChangesForDocument[(string)$documentNode] = $changedNodes;

        return $changedNodes;
    }

    public function documentTypeIsExcluded(NodeInterface $documentNode): bool
    {
        return in_array($documentNode->getNodeType()->getName(), $this->excludedDocumentTypes, true);
    }

    public function documentHasChangesInOtherWorkspace(NodeInterface $documentNode): bool
    {
        $nodes = $this->findChangedNodeDataForDocument($documentNode);
        return !empty($nodes);
    }

    /**
     * @param NodeInterface $node
     * @return NodeInterface
     * @throws \Neos\Eel\Exception
     */
    public function resolveParentDocumentNode(NodeInterface $node): ?NodeInterface
    {

        if ($node->getNodeType()->isOfType(self::NODETYPE_NEOS_DOCUMENT)) {
            return $node;
        }

        foreach ($this->firstLevelDocumentNodeCache as $documentNodePath => $documentNode) {
            if (strpos($node->getPath(), $documentNodePath) === 0) {
                return $documentNode;
            }
        }

        /** @var NodeInterface $parent */
        $parent = (new FlowQuery([$node]))->closest('[instanceof ' . self::NODETYPE_NEOS_DOCUMENT . ']')->get(0);

        $this->logger->error(sprintf('The parent document for node %s could not be determined', (string)$node), LogEnvironment::fromMethodName(__METHOD__));

        if (!$parent instanceof NodeInterface) {
            return null;
        }

        $this->firstLevelDocumentNodeCache[$parent->getPath()] = $parent;

        return $parent;
    }

    private function calculateChangeTypeForNode(NodeInterface $node, Context $context): string
    {
        if ($node->isRemoved()) {
            return self::CHANGE_TYPE_REMOVED;
        }

        if ($context->getNodeByIdentifier($node->getIdentifier()) === null) {
            return self::CHANGE_TYPE_CREATED;
        }

        return self::CHANGE_TYPE_CHANGED;
    }

    /**
     * @param NodeInterface $documentNode
     * @return NodeData[]
     */
    private function findChangedNodeDataForDocument(NodeInterface $documentNode): array
    {
        if (isset($this->changedNodeDataForDocument[(string)$documentNode])) {
            return $this->changedNodeDataForDocument[(string)$documentNode];
        }

        if ($this->documentTypeIsExcluded($documentNode)) {
            return [];
        }

        $nodes = $this->nodeDataRepository->findChangedSubNodesInOtherWorkspaces(
            $documentNode,
            $this->userService->getPersonalWorkspace()
        );


        $this->changedNodeDataForDocument[(string)$documentNode] = $nodes;

        $this->logger->debug(
            sprintf(
                'Found changed nodes (%s) for document with identifier %s in workspaces %s',
                implode(', ', array_unique(array_map(static function (NodeData $node) {
                    return $node->getIdentifier();
                }, $nodes))),
                $documentNode->getIdentifier(),
                implode(', ', array_map(static function (NodeData $node) {
                        return $node->getWorkspace()->getName();
                    }, $nodes)
                ),
            ), LogEnvironment::fromMethodName(__METHOD__));

        return $nodes;
    }
}
