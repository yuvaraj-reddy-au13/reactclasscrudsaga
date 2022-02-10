import { EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAIL } from '../actionTypes/editUser';


export const editUserRequestAction = (data) => {
    return {
        type : EDIT_USER_REQUEST,
        payload : data
    }
}

export const editUserSuccessAction = () => {
    return {
        type : EDIT_USER_SUCCESS
    }
}

export const editUserFailAction = (error) => {
    return {
        type : EDIT_USER_FAIL,
        payload : error
    }
}