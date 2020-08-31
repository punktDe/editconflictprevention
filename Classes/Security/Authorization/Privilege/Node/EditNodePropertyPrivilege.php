<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Security\Authorization\Privilege\Node;

/*
 *  (c) 2020 punkt.de GmbH - Karlsruhe, Germany - http://punkt.de
 *  All rights reserved.
 */

use Neos\ContentRepository\Security\Authorization\Privilege\Node\EditNodePropertyPrivilege as NeosEditNodePropertyPrivilege;

class EditNodePropertyPrivilege extends NeosEditNodePropertyPrivilege
{
    /**
     * @var string
     */
    protected $nodeContextClassName = PropertyAwareNodePrivilegeContext::class;
}
