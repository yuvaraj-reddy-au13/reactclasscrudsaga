import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from '../actionTypes/addUser';


export const createUserRequestAction = (data) => {
    return {
        type : CREATE_USER_REQUEST,
        payload : data
    }
}

export const createUserSuccessAction = () => {
    return {
        type : CREATE_USER_SUCCESS
    }
}

export const createUserFailAction = (error) => {
    return {
        type : CREATE_USER_FAIL,
        payload : error
    }
}