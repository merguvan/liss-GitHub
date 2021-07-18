import {
  USER_LOGIN_FULFILLED,
  USER_LOGIN_REJECTED,
  USER_LOGIN_PENDING,
  USER_LOGOUT,
} from "../actionTypes/userLoginDetails";
const userInfoFromStorage = () => {
  return JSON.parse(localStorage.getItem("userInfo"));
};
const initialState = {
  userLogin: userInfoFromStorage(),
};

export function userLoginDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_FULFILLED:
      return {
        ...state,
        userLogin: action.payload,
        user: true,
        loading: false,
      };
    case USER_LOGIN_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case USER_LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}
