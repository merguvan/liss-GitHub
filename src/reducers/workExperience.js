import { ADD_WORK_EXPERIENCE } from "../actionTypes"

const initialState = {
workExperience:{},

}

export function workExperienceReducer (state = initialState,action){

    switch (action.type) {

        case ADD_WORK_EXPERIENCE:
            
            return {
                ...state,workExperience:{...state.workExperience,newData:action.payload}}

    default:
        return state
    }
}
