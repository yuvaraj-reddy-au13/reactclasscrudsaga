import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from '../actionTypes/addUser';


const initialState = {
    loading : false ,
    users : []
}

const createUserReducer = (state = {users:[]}, action) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return {
                ...state, 
                loading : true
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading : false
            }
        case CREATE_USER_FAIL:
            return {
                users : action.payload,
                loading : false
            }
    
        default:
            return state;
    }
}


export default createUserReducer;