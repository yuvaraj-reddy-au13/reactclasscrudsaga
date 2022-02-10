import { takeEvery, call, all, put, delay  } from 'redux-saga/effects';
import { LOAD_USER_API_REQUEST, LOAD_USER_API_SUCCESS, LOAD_USER_API_FAIL } from '../actionTypes/loadUserApi';

import axios from 'axios';

import { loadUserSuccessAction, loadUserFailAction } from '../actions/loadUersApi'


function* fetchLoadUserApi () {
    return yield axios.get('http://localhost:5000/users')
}

function* workLoadUserApi () {
    try {
        const data = yield call(fetchLoadUserApi)
        yield delay(300)

        yield put(loadUserSuccessAction(data.data))

    } catch (error) {
        yield put(loadUserFailAction(error))
        
    }
}

function* loadUserApiSaga () {
    yield takeEvery(LOAD_USER_API_REQUEST, workLoadUserApi)
}

export default loadUserApiSaga ;