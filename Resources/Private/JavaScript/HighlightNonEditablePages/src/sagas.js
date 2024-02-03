import 'regenerator-runtime/runtime';
import {takeEvery, takeLatest, put, select} from 'redux-saga/effects';
import {actionTypes, selectors} from '@neos-project/neos-ui-redux-store';
import {fetchWithErrorHandling} from '@neos-project/neos-ui-backend-connector';
import {actions as localActions} from './redux';

export function* getNodeChanges() {
    const documentNode = yield select(selectors.CR.Nodes.documentNodeSelector);
    let changes = [];
    try {
        const response = yield fetchWithErrorHandling.withCsrfToken(csrfToken => ({
            url: '/editconflictprevention/api/getchangednodes',
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-Flow-Csrftoken': csrfToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nodePath: documentNode.contextPath
            })
        }));
        changes = yield response.json().then(json => JSON.parse(json));
    } catch (error) {
        console.log(error);
    }
    if (changes.length > 0) {
        yield put(localActions.setChanges(changes));
    } else {
        yield put(localActions.setChanges([]));
    }
}

export function * watchGetNodeChanges() {
    yield takeEvery(actionTypes.CR.Nodes.SET_DOCUMENT_NODE, getNodeChanges);
}
