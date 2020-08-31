<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Security\Authorization\Privilege\Node;

/*
 *  (c) 2020 punkt.de GmbH - Karlsruhe, Germany - http://punkt.de
 *  All rights reserved.
 */

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Security\Authorization\Privilege\Node\NodePrivilegeContext as NeosNodePrivilegeContext;
use Neos\Flow\Log\Utility\LogEnvironment;
use Psr\Log\LoggerInterface;
use PunktDe\EditConflictPrevention\Domain\ChangedNodesCalculator;

class NodePrivilegeContext extends NeosNodePrivilegeContext
{
    /**
     * @Flow\Inject
     * @var LoggerInterface
     */
    protected $logger;

    /**
     * @Flow\Inject
     * @var ChangedNodesCalculator
     */
    protected $changedNodesCalculator;

    public function hasChangesInOtherWorkspaces(): bool
    {

        $return = $this->hasChangesInOtherWorkspaceInternal();

        $this->logger->debug(sprintf('Node privilege hasChangesInOtherWorkspaces for node %s returns %s', $this->node, $return ? 'true' : 'false'), LogEnvironment::fromMethodName(__METHOD__));

        return $return;
    }

    private function hasChangesInOtherWorkspaceInternal(): bool
    {
        $documentNode = $this->changedNodesCalculator->resolveParentDocumentNode($this->node);

        if ($documentNode === $this->node) {
            return false;
        }

        return $this->changedNodesCalculator->documentHasChangesInOtherWorkspace($documentNode);
    }
}
