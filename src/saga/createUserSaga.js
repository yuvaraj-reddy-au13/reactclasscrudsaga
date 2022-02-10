import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { CREATE_USER_REQUEST } from '../actionTypes/addUser';

import axios from 'axios';

import { createUserRequestAction } from '../actions/createUserAction'


// function* createUserApiRequest (data){
//     console.log('inside api request')
//     console.log("data : ", data)
//     const config = {
//         headers : { 
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//              }
//     }
    // const response = yield fetch("http://localhost:5000/users",
    // {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     method: "POST",
    //     body: JSON.stringify(data)
    // })
    // .then((res) => res.json())
    // .catch((error) => console.log(error))
    // yield delay(500)
    // yield console.log(res.data)
    // return yield axios.post('http://localhost:5000/users', data)
//     const response = yield axios.post('http://localhost:5000/users', data, config)
//     console.log(response)
//     if(response.status === 500){
//         alert('could not create the request, an error accured, try with different credentials')
//     }else {
//         return response.data
//     }
//     // return response.data
// }



function* createUserApiRequest (data) {
    try {
        console.log('inside api request', data)
        const config = {
                headers : { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                        }
            }
        const response = yield axios.post('http://localhost:5000/users', data, config)
        yield delay(500)
        console.log("data : ", data)
        return response.data
        
    } catch (error) {
        alert('an error occured !! , could not create ur request, this is because of user already present in the data, try with different credentials')
        console.log(error)
    }
}



function* workCreateUserSaga (action){

    try {
        console.log('into try')
        const response = yield call(createUserApiRequest, action.payload)

        if(response.status === 201) {
            // yield put(createUserApiRequest(response))
            yield put(createUserRequestAction(response))
            console.log("Payload : ", action.payload)
        }
    } catch (error) {
        console.log('an error accured : ' , error)
    }
}

function* createUserSaga () {
    yield takeLatest(CREATE_USER_REQUEST, workCreateUserSaga)
}


export default createUserSaga;