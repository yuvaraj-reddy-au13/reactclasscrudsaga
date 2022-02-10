import { EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAIL } from '../actionTypes/editUser';


const initialState = {
    loading : false ,
    users : []
}

const editUserReducer = (state = {user:{}}, action) => {
    switch (action.type) {
        case EDIT_USER_REQUEST:
            return {
                ...state, 
                loading : true
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                user : action.payload,
                loading : false
            }
        case EDIT_USER_FAIL:
            return {
                user : action.payload,
                loading : false
            }
    
        default:
            return state;
    }
}


export default editUserReducer;