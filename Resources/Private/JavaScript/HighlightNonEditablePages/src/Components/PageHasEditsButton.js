import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {$transform, $get} from 'plow-js';
import {Button, Icon} from '@neos-project/react-ui-components';
import PropTypes from 'prop-types';
import {actions as localActions} from '../redux';
import I18n from '@neos-project/neos-ui-i18n';

@connect(
    $transform({
        changes: $get('plugins.pageEditsOverviewModal.changes')
    }), {open: localActions.openDialog}
)

export const PageHasEditsButton = () => {
    return class PageHasEditsButton extends PureComponent {
        static propTypes = {
            changes: PropTypes.array.isRequired
        };

        render() {
            const {open, changes} = this.props;
            return(changes !== undefined && changes.length > 0) ? (
                <Button
                    style="error"
                    hoverStyle="error"
                    onClick={() => open()}
                    >
                    <I18n id="PunktDe.EditConflictPrevention:Main:button.label" />
                    <Icon
                        icon="warning" />
                </Button>
            ) : '';
        }
    }
};
