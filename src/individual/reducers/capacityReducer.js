import {
  ADD_CAPACITY_INFO_PENDING,
  ADD_CAPACITY_INFO_REJECTED,
  ADD_CAPACITY_INFO_FULFILLED,
} from "../actionTypes/capacity";

const initialState = {
  capacity: {},
  loading: false,
  error: {},
};

export function capacityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAPACITY_INFO_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CAPACITY_INFO_FULFILLED:
      return {
        ...state,
        loading: false,
        capacity: action.payload,
      };
    case ADD_CAPACITY_INFO_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
