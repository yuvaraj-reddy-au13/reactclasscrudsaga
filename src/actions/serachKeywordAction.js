import { SEARCHKEYWORD_REQUEST, SEARCHKEYWORD_SUCCESS, SEARCHKEYWORD_FAIL } from '../actionTypes/searchKeywordTypes';


export const searchKeywordRequest = (keyword) => {
    return {
        type : SEARCHKEYWORD_REQUEST,
        payload : keyword
    }
}


export const searchKeywordSuccess = (keyword) => {
    return {
        type : SEARCHKEYWORD_REQUEST,
        payload : keyword
    }
}

export const searchKeywordFail = (error) => {
    return {
        type : SEARCHKEYWORD_REQUEST,
        payload : error
    }
}