import React, {PureComponent} from 'react';
import styles from '../style.css';
import I18n from '@neos-project/neos-ui-i18n';

export class ChangeTableRow extends PureComponent {

    getReadableTimeDifference(timestamp) {
        let currentTimestamp = Math.floor(Date.now() / 1000);
        let diff = currentTimestamp - timestamp;
        if (diff < 60) {
            return (
                <I18n id="PunktDe.EditConflictPrevention:Main:timespan.recent" />
            )
        }

        let timePeriods = [
            [60 * 100, 60, 'minutes'],
            [3600 * 24, 3600, 'hours'],
            [3600 * 24 * 7, 3600 * 24, 'days'],
            [3600 * 24 * 30, 3600 * 24 * 7, 'weeks'],
            [3600 * 24 * 30 * 12, 3600 * 24 * 30, 'months'],
            [Infinity, 3600 * 24 * 365, 'years']
        ];

        for (let timePeriod of timePeriods) {
            if (diff > timePeriod[0]) {
                continue;
            }

            let elapsedPeriods = Math.floor(diff / timePeriod[1]);
            return (<I18n id={`PunktDe.EditConflictPrevention:Main:timespan.${timePeriod[2]}.${diff > 1 ? 1 : 0}`} params={{count: elapsedPeriods}}/>);
        }
    }

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
                <td>{this.getReadableTimeDifference(this.props.changeDate)}</td>
                <td><span className={this.getClassNameForChangeType()}><I18n id={`PunktDe.EditConflictPrevention:Main:changeType.${this.props.changeType}`} /></span></td>
                <td>{this.props.nodeLabel}</td>
                <td>{this.props.workspaceName}</td>
            </tr>
        )
    }
}
