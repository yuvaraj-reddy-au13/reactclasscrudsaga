import { SEARCHKEYWORD_REQUEST, SEARCHKEYWORD_SUCCESS, SEARCHKEYWORD_FAIL } from '../actionTypes/searchKeywordTypes';


const searchKeywordReducer = (state = {keyword : ''}, action) => {
    switch (action.type) {
        case SEARCHKEYWORD_REQUEST:
            return {...state, keyword:action.payload}

        case SEARCHKEYWORD_SUCCESS:
            return {...state, keyword : action.payload}

        case SEARCHKEYWORD_FAIL:
            return {...state, error : action.payload}
    
        default:
            return state
    }
}

export default searchKeywordReducer;