<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Security\Authorization\Privilege\Node;

/*
 *  (c) 2020 punkt.de GmbH - Karlsruhe, Germany - http://punkt.de
 *  All rights reserved.
 */

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Security\Authorization\Privilege\Node\NodePrivilegeContext as NeosNodePrivilegeContext;
use PunktDe\EditConflictPrevention\Domain\ChangedNodesCalculator;

class NodePrivilegeContext extends NeosNodePrivilegeContext
{
    /**
     * @Flow\Inject
     * @var ChangedNodesCalculator
     */
    protected $changedNodesCalculator;

    public function hasChangesInOtherWorkspaces(): bool
    {
        return $this->hasChangesInOtherWorkspaceInternal();
    }

    /**
     * @return bool
     * @throws \Neos\Eel\Exception
     */
    private function hasChangesInOtherWorkspaceInternal(): bool
    {
        if (!$this->node instanceof NodeInterface) {
            return false;
        }

        $documentNode = $this->changedNodesCalculator->resolveParentDocumentNode($this->node);
        return $this->changedNodesCalculator->documentHasChangesInOtherWorkspace($documentNode);
    }
}
