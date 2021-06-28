import { ADD_ACADEMIC_WORK_DETAILS } from "../actionTypes"

const initialState = {
academicWork:{},

}

export function academicWorksDetailsReducer (state = initialState,action){

    switch (action.type) {

        case ADD_ACADEMIC_WORK_DETAILS:
            
            return {
                ...state,academicWork:{...state.academicWork,...action.payload}}

    default:
        return state
    }
}
