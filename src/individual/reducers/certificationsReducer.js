import {
  ADD_CERTIFICATIONS_INFO_PENDING,
  ADD_CERTIFICATIONS_INFO_REJECTED,
  ADD_CERTIFICATIONS_INFO_FULFILLED,
} from "../actionTypes/certifications";

const initialState = {
  certifications: {},
  loading: false,
  error: {},
};

export function certificationsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CERTIFICATIONS_INFO_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CERTIFICATIONS_INFO_FULFILLED:
      return {
        ...state,
        loading: false,
        certifications: action.payload,
      };
    case ADD_CERTIFICATIONS_INFO_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}