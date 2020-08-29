<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Security\Authorization\Privilege\Node;

use Neos\ContentRepository\Security\Authorization\Privilege\Node\EditNodePrivilege as NeosEditNodePrivilege;

/**
 * A privilege to restrict editing of nodes based on changes in other workspaces
 */
class EditNodePrivilege extends NeosEditNodePrivilege
{
    /**
     * @var string
     */
    protected $nodeContextClassName = NodePrivilegeContext::class;
}
