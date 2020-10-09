import React, {PureComponent} from 'react';
import {Dialog, Button, Icon} from '@neos-project/react-ui-components';
import PropTypes from 'prop-types';
import {$get, $transform} from "plow-js";
import {connect} from 'react-redux';
import {actions as localActions} from '../redux';
import styles from '../style.css';
import {ChangeTableRow} from "./ChangeTableRow";
import I18n from '@neos-project/neos-ui-i18n';

@connect(
    $transform({
        isOpen: $get('plugins.pageEditsOverviewModal.isOpen'),
        changes: $get('plugins.pageEditsOverviewModal.changes')
    }),
    {close: localActions.closeDialog}
)

export const PageEditsOverviewModal = () => {
    return class PageEditsOverviewModal extends PureComponent {
        static propTypes = {
            isOpen: PropTypes.bool.isRequired,
            close: PropTypes.func.isRequired,
            changes: PropTypes.array
        };

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
            const {isOpen, changes} = this.props;
            return (isOpen && changes !== undefined && changes.length > 0) ? (
                <div className={styles.editconflictHint}>
                    <div><I18n id="PunktDe.EditConflictPrevention:Main:modal.hint"/></div>
                    <table className={styles.editconflictTable}>
                        <thead>
                            <th><I18n id="PunktDe.EditConflictPrevention:Main:modal.thead.date"/></th>
                            <th><I18n id="PunktDe.EditConflictPrevention:Main:modal.thead.type"/></th>
                            <th><I18n id="PunktDe.EditConflictPrevention:Main:modal.thead.node"/></th>
                            <th><I18n id="PunktDe.EditConflictPrevention:Main:modal.thead.workspace"/></th>
                        </thead>
                        {changes.map(node => {
                            return (<ChangeTableRow
                                changeType={node.changeType}
                                changeDate={node.changeDate}
                                workspaceName={node.workspaceName}
                                nodeLabel={node.nodeLabel}
                            />)
                        })}
                    </table>
                </div>
            ): '';
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
