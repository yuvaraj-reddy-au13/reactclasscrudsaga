import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from '../actionTypes/deleteUser';

import { deleteRequestAction, deleteFailAction } from '../actions/deleteUserAction'
import { delay } from 'redux-saga/effects';


function* fetchUserDelete(id) {
    const config = {
        header : { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
                }
    }
    return yield axios.delete(`http://localhost:5000/users/${id}`, id, config)
}


function* workDeleteUserSaga (action) {
    try {
        const data = yield call(fetchUserDelete, action.payload)
        yield delay(500)
        put(deleteRequestAction(data.data))
    } catch (error) {
        yield put(deleteFailAction(error))
    }
}


function* deleteUserSaga () {
    yield takeEvery(DELETE_USER_REQUEST, workDeleteUserSaga)
}


export default deleteUserSaga;