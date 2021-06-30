import { ADD_CAPACITY_DETAILS } from "../actionTypes"

const initialState = {
addCapacity:{},

}

export function capacityReducer (state = initialState,action){

    switch (action.type) {

        case ADD_CAPACITY_DETAILS:
            
            return {
                ...state,
                addCapacity:action.payload}

    default:
        return state
    }
}
