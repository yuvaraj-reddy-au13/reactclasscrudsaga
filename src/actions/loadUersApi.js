import { LOAD_USER_API_REQUEST, LOAD_USER_API_SUCCESS, LOAD_USER_API_FAIL } from '../actionTypes/loadUserApi';


export const loadUserRequestAction = () => {
    return {
        type : LOAD_USER_API_REQUEST
    }
}

export const loadUserSuccessAction = (data) => {
    return {
        type : LOAD_USER_API_SUCCESS,
        payload : data
    }
}

export const loadUserFailAction = (error) => {
    return {
        type : LOAD_USER_API_REQUEST,
        payload : error
    }
}