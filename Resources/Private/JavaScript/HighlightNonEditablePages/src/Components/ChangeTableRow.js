import React, {PureComponent} from 'react';
import styles from '../style.css';
import I18n from '@neos-project/neos-ui-i18n';

export class ChangeTableRow extends PureComponent {

    getClassNameForChangeType() {
        switch (this.props.changeType) {
            case 'created': return styles.editconflictCreated;
            case 'changed': return styles.editconflictChanged;
            case 'removed': return styles.editconflictRemoved;
            default: return '';
        }
    };

    render() {
        return (
            <tr>
                <td>{this.props.changeDate}</td>
                <td><span className={this.getClassNameForChangeType()}><I18n id={`PunktDe.EditConflictPrevention:Main:changeType.${this.props.changeType}`} /></span></td>
                <td>{this.props.nodeLabel}</td>
                <td>{this.props.workspaceName}</td>
            </tr>
        )
    }
}
