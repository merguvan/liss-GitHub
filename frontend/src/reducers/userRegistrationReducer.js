import {
  USER_REGISTRATION_FULFILLED,
  USER_REGISTRATION_REJECTED,
  USER_REGISTRATION_PENDING,
} from "../actionTypes/userRegistration";

const initialState = {
  loading: false,
  userRegistrationDetails: {},
  error: "",
};

export function userRegistrationDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTRATION_FULFILLED:
      return {
        ...state,
        userRegistrationDetails: action.payload,
        loading: false,
      };
    case USER_REGISTRATION_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case USER_REGISTRATION_PENDING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
