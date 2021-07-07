import { GET_USER_LOGIN_DETAILS_FULFILLED,GET_USER_LOGIN_DETAILS_REJECTED,GET_USER_LOGIN_DETAILS_PENDING } from "../actionTypes"

const initialState = {
userLoginDetails:{},
user:false

}

export function userLoginDetailsReducer (state = initialState,action){
    console.log(action.payload)
    switch (action.type) {
    
        case GET_USER_LOGIN_DETAILS_FULFILLED:
            
            return {
                ...state,
                userLoginDetails:action.payload,
                user:true
            }
            case GET_USER_LOGIN_DETAILS_REJECTED:
            
                return {
                    ...state,
                    userLoginDetails:action.payload
                }    
                case GET_USER_LOGIN_DETAILS_PENDING:
            
                    return {
                        ...state,
                        userLoginDetails:action.payload
                    }
    default:
        return state
    }
}

