import { ADD_EDUCATION } from "../actionTypes"

const initialState = {
education:{},

}

export function educationReducer (state = initialState,action){

    switch (action.type) {

        case ADD_EDUCATION:
            
            return {
                ...state,education:action.payload}

    default:
        return state
    }
}
