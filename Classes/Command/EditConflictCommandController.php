<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Command;

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Repository\WorkspaceRepository;
use Neos\Flow\Cli\CommandController;
use Neos\Neos\Domain\Service\UserService;
use Neos\Neos\Utility\User;
use PunktDe\EditConflictPrevention\Domain\Repository\NodeDataRepository;

class EditConflictCommandController extends CommandController
{

    /**
     * @Flow\Inject
     * @var NodeDataRepository
     */
    protected $nodeDateRepository;

    /**
     * @Flow\Inject
     * @var UserService
     */
    protected $userService;

    /**
     * @Flow\Inject
     * @var WorkspaceRepository
     */
    protected $workspaceRepository;

    public function analyzeCommand(string $nodePath, string $userName): void
    {
        $user = $this->userService->getUser($userName);
        $userWorkspace = $this->workspaceRepository->findByIdentifier(User::getPersonalWorkspaceNameForUsername($userName));

        $result = $this->nodeDateRepository->findChangedSubNodesInOtherWorkspaces($nodePath, $userWorkspace);

        \Neos\Flow\var_dump($result, __METHOD__ . ':' . __LINE__);
    }
}
