import { ADD_CERTIFICATIONS_DETAILS } from "../actionTypes"

const initialState = {
certifications:{},

}

export function certificationsReducer (state = initialState,action){

    switch (action.type) {

        case ADD_CERTIFICATIONS_DETAILS:
            
            return {
                ...state,certifications:{...state.certifications,...action.payload}}

    default:
        return state
    }
}
