import { ADD_ATTACHMENT_INFO_FULFILLED, ADD_ATTACHMENT_INFO_PENDING, ADD_ATTACHMENT_INFO_REJECTED } from "../actionTypes/attachments"

const initialState = {
}

export function attachmentReducer (state = initialState,action){

    switch (action.type) {

        case ADD_ATTACHMENT_INFO_FULFILLED:
            
            return {
                ...state,
                attachments:action.payload,
                loading:false
            }
        case ADD_ATTACHMENT_INFO_PENDING:
            return {
                ...state,
                loading:true}
        case ADD_ATTACHMENT_INFO_REJECTED:
            return {
                ...state,
                loading:false,
                error:action.payload }
    default:
        return state
    }
}
