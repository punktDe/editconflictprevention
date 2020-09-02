<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Exception\NodeConfigurationException;
use Neos\ContentRepository\Domain\Model\Node;
use Neos\ContentRepository\Domain\Repository\NodeDataRepository;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Flow\Persistence\Exception\IllegalObjectTypeException;
use Neos\Neos\Controller\CreateContentContextTrait;
use PunktDe\EditConflictPrevention\Domain\ChangedNodesCalculator;
use PunktDe\EditConflictPrevention\Domain\Dto\ChangedNode;

class ChangedNodesApiController extends ActionController
{
    use CreateContentContextTrait;
    /**
     * @var array
     */
    protected $viewFormatToObjectNameMap = [
        'json' => JsonView::class
    ];

    /**
     * @var NodeDataRepository
     * @Flow\Inject
     */
    protected $nodeDataRepository;

    /**
     * @var ChangedNodesCalculator
     * @Flow\Inject
     */
    protected $changedNodesCalculator;

    /**
     * @param string $nodePath
     * @throws IllegalObjectTypeException
     */
    public function nodeHasChangesAction(string $nodePath)
    {
        $this->view->assign('value', $this->changedNodesCalculator->documentHasChangesInOtherWorkspace($this->getNodeInterfaceFromPath($nodePath)));
    }

    /**
     * @param string $nodePath
     * @throws NodeConfigurationException
     * @throws IllegalObjectTypeException
     */
    public function getChangedNodesAction(string $nodePath)
    {
        $documentNode = $this->getNodeInterfaceFromPath($nodePath);

        $changedNodes = $this->changedNodesCalculator->calculateChangesForDocument($documentNode);
        $result = [];
        foreach ($changedNodes as $changedNode) {
            $result[] = $this->parseChangedNode($changedNode);
        }

        $this->view->assign('value', json_encode($result));
    }

    /**
     * @param string $nodePath
     * @return NodeInterface|null
     * @throws IllegalObjectTypeException
     */
    protected function getNodeInterfaceFromPath(string $nodePath): ?NodeInterface
    {
        $context = $this->createContentContext('live');
        return new Node($this->nodeDataRepository->findOneByPath(explode('@', $nodePath)[0], $context->getWorkspace('live')), $context);
    }

    /**
     * @param ChangedNode $changedNode
     * @return string[]
     */
    protected function parseChangedNode(ChangedNode $changedNode): array
    {
        return [
            'changeDate' => $this->parseChangedDate($changedNode->getDate()),
            'changeType' => $changedNode->getChangeType(),
            'workspaceName' => $this->parseWorkspaceName($changedNode),
            'nodeLabel' => $changedNode->getNodeLabel(),
        ];
    }

    /**
     * @param ChangedNode $changedNode
     * @return string
     */
    protected function parseWorkspaceName(ChangedNode $changedNode): string
    {
        if ($changedNode->getWorkspaceOwnerPrimaryElectronicAddress() !== null && $changedNode->getWorkspaceOwnerPrimaryElectronicAddress()->getType() === 'Email') {
            return $changedNode->getWorkspaceOwnerName() . ' ' . $changedNode->getWorkspaceOwnerPrimaryElectronicAddress()->getIdentifier();
        }
        return $changedNode->getWorkspaceOwnerName();
    }


    protected function parseChangedDate(\DateTimeInterface $dateTime): string
    {
        $diff = time() - $dateTime->getTimestamp();
        $periods[] = [60 * 100, 60, '%s minutes ago', 'one minute ago'];
        $periods[] = [3600 * 70, 3600, '%s hours ago', 'an hour ago'];
        $periods[] = [3600 * 24 * 10, 3600 * 24, '%s days ago', 'yesterday'];
        $periods[] = [3600 * 24 * 30, 3600 * 24 * 7, '%s weeks ago', 'one week ago'];
        $periods[] = [3600 * 24 * 30 * 30, 3600 * 24 * 30, '%s months ago', 'last month'];
        $periods[] = [INF, 3600 * 24 * 265, '%s years ago', 'last year'];
        foreach ($periods as $period) {
            if ($diff > $period[0]) {
                continue;
            }
            $diff = floor($diff / $period[1]);
            return sprintf($diff > 1 ? $period[2] : $period[3], $diff);
        }
        return 'just now';
    }
}
