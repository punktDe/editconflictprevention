import React, {PureComponent} from 'react';
import {Dialog, Button, Icon} from '@neos-project/react-ui-components';
import PropTypes from 'prop-types';
import {$get, $transform} from "plow-js";
import {connect} from 'react-redux';
import {actions as localActions} from '../redux';
import {fetchWithErrorHandling} from '@neos-project/neos-ui-backend-connector';
import styles from '../style.css';
import {ChangeTableRow} from "./ChangeTableRow";
import I18n from '@neos-project/neos-ui-i18n';

@connect(
    $transform({
        isOpen: $get('ui.pageEditsOverviewModal.isOpen'),
        documentNodePath: $get('cr.nodes'), // Only works with Neos UI 2+
    }),
    {close: localActions.closeDialog}
)

export const PageEditsOverviewModal = () => {
    return class PageEditsOverviewModal extends PureComponent {
        static propTypes = {
            isOpen: PropTypes.bool.isRequired,
            close: PropTypes.func.isRequired
        };

        constructor(props) {
            super(props);
            this.state = {
                changedNodes: []
            }
        }

        componentDidMount() {
            const {documentNodePath} = this.props;
            fetchWithErrorHandling.withCsrfToken(csrfToken => ({
                url: `/editconflictprevention/api/getchangednodes?nodePath=${documentNodePath.documentNode}`,
                method: 'GET',
                credentials: 'include',
                headers: {
                    'X-Flow-Csrftoken': csrfToken,
                    'Content-Type': 'application/json'
                }
            }))
                .then(result => result.json())
                .then(json => {
                    this.setState({changedNodes: JSON.parse(json)});
                });
        }

        renderCloseAction() {
            return (
                <Button
                    id="neos-KeyboardShortcutModal-Close"
                    key="close"
                    style="lighter"
                    hoverStyle="brand"
                    onClick={() => this.props.close()}
                ><I18n id="PunktDe.EditConflictPrevention:Main:modal.button.close.caption" /></Button>
            );
        }

        renderConflictsHint() {
            const {isOpen} = this.props;

            return isOpen ? (
                <div className={styles.editconflictHint}>
                    <div><I18n id="PunktDe.EditConflictPrevention:Main:modal.hint"/></div>
                    <table className={styles.editconflictTable}>
                        <thead>
                            <th><I18n id="PunktDe.EditConflictPrevention:Main:modal.thead.date"/></th>
                            <th><I18n id="PunktDe.EditConflictPrevention:Main:modal.thead.type"/></th>
                            <th><I18n id="PunktDe.EditConflictPrevention:Main:modal.thead.node"/></th>
                            <th><I18n id="PunktDe.EditConflictPrevention:Main:modal.thead.workspace"/></th>
                        </thead>
                        {this.state.changedNodes.map(node => {
                            return (<ChangeTableRow
                                changeType={node.changeType}
                                changeDate={node.changeDate}
                                workspaceName={node.workspaceName}
                                nodeLabel={node.nodeLabel}
                            />)
                        })}
                    </table>
                </div>
            ) : '';
        }

        render() {
            const {close, isOpen} = this.props;
            return (
                <Dialog
                    actions={[this.renderCloseAction()]}
                    title={<h2>
                        <I18n id="PunktDe.EditConflictPrevention:Main:modal.title" />&nbsp;
                        <Icon icon="warning"/>
                    </h2>}
                    isOpen={isOpen}
                    type="error"
                    style="wide"
                    onRequestClose={() => close()}
                    children={this.renderConflictsHint()}
                >
                </Dialog>
            );
        }
    }
}
