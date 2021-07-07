import {
  ADD_PERSONAL_INFO_FULFILLED,
  ADD_PERSONAL_INFO_REJECTED,
  ADD_PERSONAL_INFO_PENDING,
} from "../actionTypes/personalInfo";
import {
  ADD_ADDRESS_INFO_FULFILLED,
  ADD_ADDRESS_INFO_REJECTED,
  ADD_ADDRESS_INFO_PENDING,
} from "../actionTypes/addressInfo";

const initialState = {
  personalInfo: {},
  loading: false,
  addressInfo: {},
  error: "",
};

export const personalInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSONAL_INFO_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_PERSONAL_INFO_FULFILLED:
      return {
        ...state,
        loading: false,
        personalInfo: action.payload,
      };
    case ADD_PERSONAL_INFO_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_ADDRESS_INFO_PENDING:
      return {
        ...state,
        loading: true,
      };

    case ADD_ADDRESS_INFO_FULFILLED:
      return {
        ...state,
        loading: false,
        addressInfo: action.payload,
      };
    case ADD_ADDRESS_INFO_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
