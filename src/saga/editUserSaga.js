import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAIL } from '../actionTypes/editUser';

import { editUserRequestAction, editUserFailAction, editUserSuccessAction } from '../actions/editUserAction'

import axios from 'axios';

function* apiEditUser(data) {
    // yield put(editUserRequestAction())
    console.log('saga edit data : ', data)
    const config = {
        header : { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
                }
    }
    return yield axios.put(`http://localhost:5000/users/${data.id}`, data, config)
}


function* workEditUser(action) {
    
    try {
        // yield put(editUserRequestAction())
        const {data} = yield call(apiEditUser, action.payload)
        console.log(data.data)
        yield delay(200)
        // yield put({type :EDIT_USER_SUCCESS, data })
        // yield put(editUserRequestAction(data.data))
        console.log(data)
    } catch (error) {
        yield put(editUserFailAction())
    }
}

function* editUsersaga() {
    console.log('saga main func')
    yield takeLatest(EDIT_USER_REQUEST, workEditUser)
}

export default editUsersaga
