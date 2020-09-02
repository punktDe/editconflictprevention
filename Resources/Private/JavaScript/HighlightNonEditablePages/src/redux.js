import {createAction} from 'redux-actions';
import {$set} from 'plow-js';
import {handleActions} from '@neos-project/utils-redux';

const OPEN_DIALOG = '@PunktDe.EditConflictPrevention/OPEN_DIALOG';
const CLOSE_DIALOG = '@PunktDe.EditConflictPrevention/CLOSE_DIALOG';

export const actionTypes = {
    OPEN_DIALOG,
    CLOSE_DIALOG
};

const openDialog = createAction(OPEN_DIALOG);
const closeDialog = createAction(CLOSE_DIALOG);

export const actions = {
    openDialog,
    closeDialog
};

export const reducer = handleActions({
    [OPEN_DIALOG]: () => $set('ui.pageEditsOverviewModal.isOpen', true),
    [CLOSE_DIALOG]: () => $set('ui.pageEditsOverviewModal.isOpen', false)
});
