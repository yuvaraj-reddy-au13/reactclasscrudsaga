import { LOAD_USER_API_REQUEST, LOAD_USER_API_SUCCESS, LOAD_USER_API_FAIL } from '../actionTypes/loadUserApi';


const initialState = {
    loading : false ,
    users : []
}

const loadUserApiReducer = (state = {users:[]}, action) => {
    switch (action.type) {
        case LOAD_USER_API_REQUEST:
            return {
                ...state, 
                loading : true
            }
        case LOAD_USER_API_SUCCESS:
            return {
                users : action.payload,
                loading : false
            }
        case LOAD_USER_API_FAIL:
            return {
                users : action.payload,
                loading : false
            }
    
        default:
            return state;
    }
}


export default loadUserApiReducer;