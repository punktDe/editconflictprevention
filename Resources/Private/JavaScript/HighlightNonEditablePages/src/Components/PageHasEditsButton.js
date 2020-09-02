import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {$transform, $get} from 'plow-js';
import {fetchWithErrorHandling} from '@neos-project/neos-ui-backend-connector';
import {Button, Icon} from '@neos-project/react-ui-components';
import PropTypes from 'prop-types';
import {actions as localActions} from '../redux';

@connect(
    $transform({
        documentNodePath: $get('cr.nodes'), // Only works with Neos UI 2+
        isOpen: $get('ui.pageEditsOverviewModal.isOpen'),
    }), {open: localActions.openDialog}
)

export const PageHasEditsButton = () => {
    return class PageHasEditsButton extends PureComponent {
        static propTypes = {
            isOpen: PropTypes.bool,
        };

        constructor(props) {
            super(props);
            this.state = {
                hasNonEditableContent: false
            }
        }

        render() {
            const {open, documentNodePath} = this.props;

            fetchWithErrorHandling.withCsrfToken(csrfToken => ({
                url: `/editconflictprevention/api/nodehaschanges?nodePath=${documentNodePath.documentNode}`,
                method: 'GET',
                credentials: 'include',
                headers: {
                    'X-Flow-Csrftoken': csrfToken,
                    'Content-Type': 'text/html'
                }
            }))
                .then(result => result.json())
                .then(json => {
                    this.setState({hasNonEditableContent: json});
                });

            return (this.state.hasNonEditableContent) ? (
                <Button
                    style="error"
                    onClick={() => open()}
                    >
                    Changes Detected&nbsp;
                    <Icon
                        icon="edit" />
                </Button>
            ) : '';
        }
    }
};
