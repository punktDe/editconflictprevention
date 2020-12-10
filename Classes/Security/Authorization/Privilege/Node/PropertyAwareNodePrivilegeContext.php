<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Security\Authorization\Privilege\Node;

/*
 *  (c) 2020 punkt.de GmbH - Karlsruhe, Germany - http://punkt.de
 *  All rights reserved.
 */

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Security\Authorization\Privilege\Node\PropertyAwareNodePrivilegeContext as NeosPropertyAwareNodePrivilegeContext;
use Neos\Flow\Annotations as Flow;
use PunktDe\EditConflictPrevention\Domain\ChangedNodesCalculator;

class PropertyAwareNodePrivilegeContext extends NeosPropertyAwareNodePrivilegeContext
{
    /**
     * @Flow\Inject
     * @var ChangedNodesCalculator
     */
    protected $changedNodesCalculator;

    public function hasChangesInOtherWorkspaces(): bool
    {
        if (!$this->node instanceof NodeInterface) {
            return false;
        }

        $documentNode = $this->changedNodesCalculator->resolveParentDocumentNode($this->node);

        if (!$documentNode instanceof NodeInterface) {
            return false;
        }

        return $this->changedNodesCalculator->documentHasChangesInOtherWorkspace($documentNode);
    }
}
