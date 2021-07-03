import { GET_USER_LOGIN_DETAILS } from "../actionTypes"

const initialState = {
userLoginDetails:{},

}

export function userLoginDetailsReducer (state = initialState,action){
    console.log('ccalisyr')
    switch (action.type) {

        case GET_USER_LOGIN_DETAILS:
            
            return {
                ...state,
                userLoginDetails:action.payload}

    default:
        return state
    }
}

