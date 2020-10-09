<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Exception\NodeConfigurationException;
use Neos\ContentRepository\Domain\Repository\NodeDataRepository;
use Neos\Flow\I18n\Translator;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Neos\Ui\ContentRepository\Service\NodeService;
use PunktDe\EditConflictPrevention\Domain\ChangedNodesCalculator;
use PunktDe\EditConflictPrevention\Domain\Dto\ChangedNode;

class ChangedNodesApiController extends ActionController
{
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
     * @var NodeService
     * @Flow\Inject
     */
    protected $nodeService;

    /**
     * @var Translator
     * @Flow\Inject
     */
    protected $translator;

    /**
     * @param string $nodePath
     * @throws NodeConfigurationException
     */
    public function getChangedNodesAction(string $nodePath): void
    {
        $documentNode = $this->nodeService->getNodeFromContextPath($nodePath);
        $changedNodes = $this->changedNodesCalculator->calculateChangesForDocument($documentNode);
        $result = [];

        foreach ($changedNodes as $changedNode) {
            $result[] = $this->parseChangedNode($changedNode);
        }

        $this->view->assign('value', json_encode($result));
    }

    /**
     * @param ChangedNode $changedNode
     * @return string[]
     */
    protected function parseChangedNode(ChangedNode $changedNode): array
    {
        return [
            'changeDate' => $changedNode->getDate()->getTimestamp(),
            'changeType' => $changedNode->getChangeType(),
            'workspaceName' => $this->parseWorkspaceName($changedNode),
            'nodeLabel' => $changedNode->getNodeLabel(),
        ];
    }

    /**w
     * @param ChangedNode $changedNode
     * @return string
     */
    protected function parseWorkspaceName(ChangedNode $changedNode): string
    {
        if ($changedNode->getWorkspaceOwnerPrimaryElectronicAddress() !== null && $changedNode->getWorkspaceOwnerPrimaryElectronicAddress()->getType() === 'Email') {
            return $changedNode->getWorkspaceOwnerName() . ' (' . $changedNode->getWorkspaceOwnerPrimaryElectronicAddress()->getIdentifier()  . ')';
        }
        return $changedNode->getWorkspaceOwnerName();
    }
}
