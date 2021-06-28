<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Service;

/*
 *  (c) 2021 punkt.de GmbH - Karlsruhe, Germany - http://punkt.de
 *  All rights reserved.
 */

use Neos\ContentRepository\Domain\Model\Workspace;
use Neos\ContentRepository\Domain\Repository\WorkspaceRepository;
use Neos\Flow\Annotations as Flow;

/**
 * @Flow\Scope("singleton")
 */
class WorkspaceService
{

    /**
     * @Flow\Inject
     * @var WorkspaceRepository
     */
    protected $workspaceRepository;

    /**
     * @var array
     */
    protected $internalWorkspaceNames = null;

    /**
     * @var array
     */
    protected $privateWorkspaceNames = null;

    public function getInternalWorkspaceNames(): array
    {
        if (is_array($this->internalWorkspaceNames)) {
            return $this->internalWorkspaceNames;
        }

        $query = $this->workspaceRepository->createQuery();
        $result = $query->matching(
            $query->logicalAnd(
                $query->logicalNot($query->equals('baseWorkspace', null)),
                $query->equals('owner', null)
            )
        )->execute();

        $this->internalWorkspaceNames = array_map(static function (Workspace $workspace) {
            return $workspace->getName();
        }, $result->toArray());

        return $this->internalWorkspaceNames;
    }

    public function getPrivateWorkspaceNames(): array
    {
        if (is_array($this->privateWorkspaceNames)) {
            return $this->privateWorkspaceNames;
        }

        $query = $this->workspaceRepository->createQuery();
        $result = $query->matching(
            $query->logicalAnd(
                $query->logicalNot($query->equals('baseWorkspace', null)),
                $query->logicalNot($query->equals('owner', null)),
                $query->logicalNot($query->equals('name', Workspace::PERSONAL_WORKSPACE_PREFIX . '%'))
            )
        )->execute();

        $this->privateWorkspaceNames = array_map(static function (Workspace $workspace) {
            return $workspace->getName();
        }, $result->toArray());

        return $this->privateWorkspaceNames;
    }
}
