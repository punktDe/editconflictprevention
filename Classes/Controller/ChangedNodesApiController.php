<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Controller;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Domain\Utility\NodePaths;
use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Exception\NodeConfigurationException;
use Neos\ContentRepository\Domain\Repository\NodeDataRepository;
use Neos\Flow\I18n\Translator;
use Neos\Flow\Log\Utility\LogEnvironment;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Flow\Security\Context as SecurityContext;
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
     * @Flow\Inject
     * @var SecurityContext
     */
    protected $securityContext;

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
     * @throws \Exception
     */
    public function getChangedNodesAction(string $nodePath): void
    {
        $this->securityContext->withoutAuthorizationChecks(function () use ($nodePath) {
            $documentNode = $this->getNodeInCurrentWorkspaceOrLive($nodePath);

            $result = [];

            if ($documentNode instanceof NodeInterface) {
                $changedNodes = $this->changedNodesCalculator->calculateChangesForDocument($documentNode);

                foreach ($changedNodes as $changedNode) {
                    $result[] = $this->parseChangedNode($changedNode);
                }
            }

            $this->view->assign('value', json_encode($result));
        });
    }

    protected function getNodeInCurrentWorkspaceOrLive(string $nodePath): ?NodeInterface
    {
        $documentNode = $this->nodeService->getNodeFromContextPath($nodePath);
        if ($documentNode !== null) {
            return $documentNode;
        }

        $this->logger->warning(sprintf('Unable to receive document node for nodePath %s', $nodePath), LogEnvironment::fromMethodName(__METHOD__));

        $nodePathAndContext = NodePaths::explodeContextPath($nodePath);
        $liveNodePath = NodePaths::generateContextPath($nodePathAndContext['nodePath'], 'live', $nodePathAndContext['dimensions']);
        $documentNode = $this->nodeService->getNodeFromContextPath($liveNodePath);

        if ($documentNode === null) {
            $this->logger->warning(sprintf('Unable to receive document node for nodePath %s', $liveNodePath), LogEnvironment::fromMethodName(__METHOD__));
        }

        return $documentNode;
    }

    /**
     * @param ChangedNode $changedNode
     * @return string[]
     * @throws \Exception
     */
    protected function parseChangedNode(ChangedNode $changedNode): array
    {
        $nodeDescription = $changedNode->isDocumentNode() ? $this->translator->translateById('documentPropertiesChanged', [], null, null, 'Main', 'PunktDe.EditConflictPrevention') : $changedNode->getNodeLabel();

        return [
            'changeDate' => $changedNode->getDate()->getTimestamp(),
            'changeType' => $changedNode->getChangeType(),
            'workspaceName' => $this->parseWorkspaceName($changedNode),
            'nodeLabel' => $nodeDescription,
        ];
    }

    /**w
     * @param ChangedNode $changedNode
     * @return string
     */
    protected function parseWorkspaceName(ChangedNode $changedNode): string
    {
        if (!$changedNode->isPersonalWorkspace()) {
            return $changedNode->getWorkspaceTitle();
        }

        if ($changedNode->getWorkspaceOwnerPrimaryElectronicAddress() !== null && $changedNode->getWorkspaceOwnerPrimaryElectronicAddress()->getType() === 'Email') {
            return $changedNode->getWorkspaceOwnerName() . ' (' . $changedNode->getWorkspaceOwnerPrimaryElectronicAddress()->getIdentifier() . ')';
        }

        return $changedNode->getWorkspaceOwnerName() ?? '';
    }
}
