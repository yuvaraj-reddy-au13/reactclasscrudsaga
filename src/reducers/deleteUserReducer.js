import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from '../actionTypes/deleteUser';


const deleteUserReducer = (state = {user : {}}, action) => {

    switch (action.type) {
        case DELETE_USER_REQUEST:
            return {
                ...state, 
                // user : action.payload
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                user : state.user.filter((item) => item.id !== action.payload)
            }

        case DELETE_USER_FAIL:
            return {
                ...state,
                user : action.payload
            } 
    
        default:
            return state;
    }
}

export default deleteUserReducer;