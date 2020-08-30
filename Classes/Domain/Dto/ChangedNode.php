<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Domain\Dto;

use Neos\ContentRepository\Domain\Model\Node;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Party\Domain\Model\ElectronicAddress;
use Neos\Party\Domain\Model\Person;

final class ChangedNode
{
    /**
     * @var Node
     */
    private $node;

    /**
     * @var string
     */
    private $changeType;

    /**
     * NodeChange constructor.
     * @param NodeInterface $node
     */
    public function __construct(NodeInterface $node, string $changeType)
    {
        $this->node = $node;
        $this->changeType = $changeType;
    }

    public function getNode(): NodeInterface
    {
        return $this->node;
    }

    public function getDate(): \DateTimeInterface
    {
        return $this->node->getLastModificationDateTime();
    }

    public function isUserWorkspace(): bool
    {
        return $this->node->getWorkspace()->isPersonalWorkspace();
    }

    public function getWorkspaceOwnerName(): string
    {
        return $this->node->getWorkspace()->getOwner()->getLabel();
    }

    public function getWorkspaceOwnerPrimaryElectronicAddress(): ?ElectronicAddress
    {
        $owner = $this->node->getWorkspace()->getOwner();
        return $owner instanceof Person ? $owner->getPrimaryElectronicAddress() : null;
    }

    public function getWorkspaceName(): string
    {
        return $this->node->getWorkspace()->getTitle();
    }

    public function getNodeLabel(): string
    {
        return $this->node->getLabel();
    }

    public function getChangeType(): string
    {
        return $this->changeType;
    }
}
