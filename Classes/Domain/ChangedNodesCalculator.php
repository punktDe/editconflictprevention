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
use Neos\Flow\Utility\Now;
use Neos\Neos\Service\UserService;
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
     * @param NodeInterface $documentNode
     * @return ChangedNodeCollection
     * @throws \Neos\ContentRepository\Exception\NodeConfigurationException
     */
    public function calculateChangesForDocument(NodeInterface $documentNode): ChangedNodeCollection
    {

        if (isset($this->calculatedChangesForDocument[(string)$documentNode])) {
            return $this->calculatedChangesForDocument[(string)$documentNode];
        }

        $changedNodes = new ChangedNodeCollection();
        foreach ($this->findChangedNodeDataForDocument($documentNode) as $nodeData) {
            $context = $this->contextFactory->create([
                'workspaceName' => $nodeData->getWorkspace()->getName(),
                'currentDateTime' => new Now(),
                'dimensions' => $documentNode->getContext()->getDimensions(),
                'targetDimensions' => $documentNode->getContext()->getTargetDimensions(),
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
    public function resolveParentDocumentNode(NodeInterface $node): NodeInterface
    {
        $nodePath = $node->getPath();

        foreach ($this->firstLevelDocumentNodeCache as $documentNodePath => $documentNode) {
            if (strpos($nodePath, $documentNodePath) === 0) {
                return $documentNode;
            }
        }

        /** @var NodeInterface $parent */
        $parent = (new FlowQuery([$node]))->closest('[instanceof ' . self::NODETYPE_NEOS_DOCUMENT . ']')->get(0);
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

        $nodes = $this->nodeDataRepository->findChangedSubNodesInOtherWorkspaces(
            $documentNode,
            $this->userService->getPersonalWorkspace()
        );

        $this->changedNodeDataForDocument[(string)$documentNode] = $nodes;

        return $nodes;
    }
}
