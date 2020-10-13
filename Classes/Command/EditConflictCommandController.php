<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Command;

use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Repository\WorkspaceRepository;
use Neos\Flow\Cli\CommandController;
use Neos\Neos\Controller\CreateContentContextTrait;
use Neos\Neos\Domain\Service\UserService;
use Neos\Neos\Utility\User;
use PunktDe\EditConflictPrevention\Domain\Repository\NodeDataRepository;

class EditConflictCommandController extends CommandController
{

    use CreateContentContextTrait;

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

    /**
     * @param string $nodeIdentifier The node identifier to check
     * @param string $userName The username of the subject
     * @param string $dimensions Json encoded dimensions (optional)
     * @throws \Neos\ContentRepository\Exception\NodeTypeNotFoundException
     * @throws \Neos\Flow\Cli\Exception\StopCommandException
     */
    public function analyzeCommand(string $nodeIdentifier, string $userName, string $dimensions = ''): void
    {
        if($dimensions !== '') {
            $dimensionArray = json_decode($dimensions, true);
        }

        $tableHeader = ['NodeIdentifier', 'Path', 'NodeType', 'Workspace'];
        $convertNodeToTableRow = static function (NodeData $node) {
            return [$node->getIdentifier(), $node->getPath(), $node->getNodeType(), $node->getWorkspace()->getName()];
        };

        $userWorkspace = $this->workspaceRepository->findByIdentifier(User::getPersonalWorkspaceNameForUsername($userName));

        $contentContext = $this->createContentContext($userWorkspace->getName(), $dimensionArray);
        $node = $contentContext->getNodeByIdentifier($nodeIdentifier);

        if (!$node instanceof NodeInterface) {
            $this->outputLine('<error>No node for the given identifier, workspace and dimension was found.</error>');
            $this->quit(1);
        }

        $this->outputLine('Analyzing changes for node:');
        $this->output->outputTable([$convertNodeToTableRow($node->getNodeData())], $tableHeader);

        $result = $this->nodeDateRepository->findChangedSubNodesInOtherWorkspaces($node, $userWorkspace);

        $this->outputLine('Found the following changes in other workspaces:');
        $this->output->outputTable(array_map($convertNodeToTableRow, $result), $tableHeader);
    }
}
