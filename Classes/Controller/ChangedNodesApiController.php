<?php
declare(strict_types=1);

namespace PunktDe\EditConflictPrevention\Controller;

use DateTimeInterface;
use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Exception\NodeConfigurationException;
use Neos\ContentRepository\Domain\Model\Node;
use Neos\ContentRepository\Domain\Repository\NodeDataRepository;
use Neos\Flow\I18n\Exception\IndexOutOfBoundsException;
use Neos\Flow\I18n\Exception\InvalidFormatPlaceholderException;
use Neos\Flow\I18n\Translator;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Flow\Persistence\Exception\IllegalObjectTypeException;
use Neos\Neos\Controller\CreateContentContextTrait;
use Neos\Neos\Ui\ContentRepository\Service\NodeService;
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
     * @var NodeService
     * @Flow\Inject
     */
    protected $nodeService;

    /**
     * @param string $nodePath
     */
    public function nodeHasChangesAction(string $nodePath): void
    {
        $this->view->assign(
            'value',
            $this->changedNodesCalculator->documentHasChangesInOtherWorkspace($this->nodeService->getNodeFromContextPath($nodePath))
        );
    }

    /**
     * @param string $nodePath
     * @throws IndexOutOfBoundsException
     * @throws InvalidFormatPlaceholderException
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
     * @throws IndexOutOfBoundsException
     * @throws InvalidFormatPlaceholderException
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

    /**
     * @param DateTimeInterface $dateTime
     * @return string
     * @throws IndexOutOfBoundsException
     * @throws InvalidFormatPlaceholderException
     */
    protected function parseChangedDate(DateTimeInterface $dateTime): string
    {
        $translator = new Translator();

        $diff = time() - $dateTime->getTimestamp();
        $periods[] = [60 * 100, 60, 'minutes'];
        $periods[] = [3600 * 24, 3600, 'hours'];
        $periods[] = [3600 * 24 * 7, 3600 * 24, 'days'];
        $periods[] = [3600 * 24 * 30, 3600 * 24 * 7, 'weeks'];
        $periods[] = [3600 * 24 * 30 * 12, 3600 * 24 * 30, 'months'];
        $periods[] = [INF, 3600 * 24 * 365, 'years'];

        if ($diff < 60) {
            return $translator->translateById('timespan.recent', [], null, null, 'Main', 'PunktDe.EditConflictPrevention');
        }
        foreach ($periods as $period) {
            if ($diff > $period[0]) {
                continue;
            }
            $diff = floor($diff / $period[1]);
            return $translator->translateById('timespan.' . $period[2], ['count' => $diff], $diff, null, 'Main', 'PunktDe.EditConflictPrevention');
        }
    }
}
