import { createStore ,combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import loadUserApiReducer from './reducers/loadUserApi';
import createUserReducer from './reducers/createUserReducer';
import searchKeywordReducer from './reducers/searchKeywordReducer'

import mySaga from './saga/mySaga';
import deleteUserReducer from './reducers/deleteUserReducer';
import editUserReducer from './reducers/editUserReducer';


const reducer = combineReducers({
    loadUserApi : loadUserApiReducer,
    createUser : createUserReducer,
    deleteUser : deleteUserReducer,
    searchKeyword : searchKeywordReducer,
    edituser : editUserReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]


const initialState = {}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)) )

sagaMiddleware.run(mySaga)

export default store;