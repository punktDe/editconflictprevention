import React, {PureComponent} from 'react';
import {Dialog, Button} from '@neos-project/react-ui-components';
import PropTypes from 'prop-types';
import {$get, $transform} from "plow-js";
import {connect} from 'react-redux';
import {actions as localActions} from '../redux';
import {fetchWithErrorHandling} from '@neos-project/neos-ui-backend-connector';
import styles from '../style.css';
import {ChangeTableRow} from "./ChangeTableRow";

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
                >Close</Button>
            );
        }

        renderConflictsHint() {
            const {isOpen} = this.props;

            return isOpen ? (
                <div className={styles.editconflictHint}>
                    <div>This page has changes in other workspaces</div>
                    <table className={styles.editconflictTable}>
                        <thead>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Node</th>
                            <th>Workspace</th>
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
                    title={<h2>Caution: Changes Detected</h2>}
                    isOpen={isOpen}
                    type="error"
                    onRequestClose={() => close()}
                    children={this.renderConflictsHint()}
                >
                </Dialog>
            );
        }
    }
}
