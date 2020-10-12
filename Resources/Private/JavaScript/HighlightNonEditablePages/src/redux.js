import {createAction} from 'redux-actions';
import {$set} from 'plow-js';
import {handleActions} from '@neos-project/utils-redux';

const OPEN_DIALOG = '@PunktDe.EditConflictPrevention/OPEN_DIALOG';
const CLOSE_DIALOG = '@PunktDe.EditConflictPrevention/CLOSE_DIALOG';
const SET_CHANGES = '@PunktDe.EditConflictPrevention/SET_CHANGES';

export const actionTypes = {
    OPEN_DIALOG,
    CLOSE_DIALOG,
    SET_CHANGES
};

const openDialog = createAction(OPEN_DIALOG);
const closeDialog = createAction(CLOSE_DIALOG);
const setChanges = createAction(SET_CHANGES);

export const actions = {
    openDialog,
    closeDialog,
    setChanges
};

export const reducer = handleActions({
    [OPEN_DIALOG]: () => $set('plugins.pageEditsOverviewModal.isOpen', true),
    [CLOSE_DIALOG]: () => $set('plugins.pageEditsOverviewModal.isOpen', false),
    [SET_CHANGES]: (changes) => $set('plugins.pageEditsOverviewModal.changes', changes)
});
