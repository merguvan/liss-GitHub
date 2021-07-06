import { ADD_REMARKS_DETAILS } from "../actionTypes";

const initialState = {
  remarks: {},
};

export function remarksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_REMARKS_DETAILS:
      return {
        ...state,
        remarks: { ...state.remarks, ...action.payload },
      };

    default:
      return state;
  }
}