import {
  GET_USER_LOGIN_DETAILS_FULFILLED,
  GET_USER_LOGIN_DETAILS_REJECTED,
  GET_USER_LOGIN_DETAILS_PENDING,
} from "../actionTypes/userLoginDetails";

const initialState = {
  userLoginDetails: {},
  user: false,
  loading: false,
  error: "",
};

export function userLoginDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LOGIN_DETAILS_FULFILLED:
      return {
        ...state,
        userLoginDetails: action.payload,
        user: true,
        loading: false,
      };
    case GET_USER_LOGIN_DETAILS_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_USER_LOGIN_DETAILS_PENDING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
