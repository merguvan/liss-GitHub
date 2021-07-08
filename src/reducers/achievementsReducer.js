import {
  ADD_ACHIEVEMENTS_INFO_PENDING,
  ADD_ACHIEVEMENTS_INFO_REJECTED,
  ADD_ACHIEVEMENTS_INFO_FULFILLED,
} from "../actionTypes/achivements";

const initialState = {
  achievements: {},
  loading: false,
  error: {},
};

export function achievementsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACHIEVEMENTS_INFO_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_ACHIEVEMENTS_INFO_FULFILLED:
      return {
        ...state,
        loading: false,
        achievements: action.payload,
      };
    case ADD_ACHIEVEMENTS_INFO_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
