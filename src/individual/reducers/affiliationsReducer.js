import { ADD_AFFILIATIONS } from "../actionTypes";

const initialState = {
  affiliations: {},
};

export function affiliationsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AFFILIATIONS:
      return {
        ...state,
        affiliations: { ...state.affiliations, newData: action.payload },
      };

    default:
      return state;
  }
}
