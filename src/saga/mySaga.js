import { all, fork } from 'redux-saga/effects';

import loadUserApiSaga from './loadUserApiSaga';
import createUserSaga from './createUserSaga';
import deleteUserSaga from './deleteUserSaga';
import editUsersaga from './editUserSaga'

const allSaga = [
    fork(loadUserApiSaga),
    fork(createUserSaga),
    fork(deleteUserSaga),
    fork(editUsersaga)

]

function* mySaga () {
   yield all([...allSaga])
}

export default mySaga;
