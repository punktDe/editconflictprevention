<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\EelHelper;

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use PunktDe\EditConflictPrevention\Domain\ChangedNodesCalculator;
use PunktDe\EditConflictPrevention\Domain\ChangedNodeCollection;

class ChangedNodesHelper implements \Neos\Eel\ProtectedContextAwareInterface
{

    /**
     * @Flow\Inject
     * @var ChangedNodesCalculator
     */
    protected $changedNodesCalculator;

    /**
     * @param NodeInterface $node
     * @return ChangedNodeCollection
     */
    public function calculateChangesInOtherWorkspaces(NodeInterface $node): ChangedNodeCollection
    {
        return $this->changedNodesCalculator->calculateChangesForDocument($node);
    }

    /**
     * @param NodeInterface $node
     * @return bool
     */
    public function hasChangesInOtherWorkspaces(NodeInterface $node): bool
    {
        return $this->changedNodesCalculator->documentHasChangesInOtherWorkspace($node);
    }

    /**
     * @inheritDoc
     */
    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
