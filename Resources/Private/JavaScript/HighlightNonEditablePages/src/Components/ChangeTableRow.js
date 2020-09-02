import React, {PureComponent} from 'react';
import styles from '../style.css';

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
                <td><span className={this.getClassNameForChangeType()}>{this.props.changeType}</span></td>
                <td>{this.props.nodeLabel}</td>
                <td>{this.props.workspaceName}</td>
            </tr>
        )
    }
}
