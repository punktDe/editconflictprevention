<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Security\Authorization\Privilege\Node;

/*
 *  (c) 2020 punkt.de GmbH - Karlsruhe, Germany - http://punkt.de
 *  All rights reserved.
 */

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Security\Authorization\Privilege\Node\NodePrivilegeContext as NeosNodePrivilegeContext;
use Psr\Log\LoggerInterface;
use PunktDe\EditConflictPrevention\Domain\ChangedNodesCalculator;

class NodePrivilegeContext extends NeosNodePrivilegeContext
{

    /**
     * @FLow\Inject
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
        $return = null;

        $documentNode = $this->changedNodesCalculator->resolveParentDocumentNode($this->node);

        if ($documentNode === $this->node) {
            $return = false;
        } else {
            $return = $this->changedNodesCalculator->documentHasChangesInOtherWorkspace($documentNode);
        }

        $this->logger->debug(sprintf('Node privilege hasChangesInOtherWorkspaces for node %s returns %s', $this->node, $return ? 'true' : 'false'));

        return $return;
    }
}
