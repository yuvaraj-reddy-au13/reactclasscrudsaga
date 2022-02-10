import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from '../actionTypes/deleteUser';


export const deleteRequestAction = (id) => {
    return {
        type : DELETE_USER_REQUEST,
        payload : id
    }
}

export const deleteSuccessAction = (id) => {
    return {
        type : DELETE_USER_SUCCESS,
        payload : id
    }
}

export const deleteFailAction = (error) => {
    return {
        type : DELETE_USER_FAIL,
        payload : error
    }
}


