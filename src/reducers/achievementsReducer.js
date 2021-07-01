import { ADD_ACHIEVEMENTS } from "../actionTypes";

const initialState = {
  achievements: {},
};

export function achievementsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACHIEVEMENTS:
      return {
        ...state,
        achievements: { ...state.achievements, newData: action.payload },
      };

    default:
      return state;
  }
}
