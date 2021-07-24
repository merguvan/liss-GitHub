import { ADD_REFERENCE } from "../actionTypes"

const initialState = {
addReference:{},

}

export function referenceReducer (state = initialState,action){

    switch (action.type) {

        case ADD_REFERENCE:
            
            return {
                ...state,
                addReference:action.payload}

    default:
        return state
    }
}
