import axios from "axios";
import {
  GET_USER_LOGIN_DETAILS_FULFILLED,
  GET_USER_LOGIN_DETAILS_REJECTED,
  GET_USER_LOGIN_DETAILS_PENDING,
} from "../actionTypes/useLoginDetails";

export const userLoginDetails = (data) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_LOGIN_DETAILS_PENDING,
    });
    const { data } = await axios.post("http://localhost:5000/user/login", {
      ...data,
    });

    dispatch({
      type: GET_USER_LOGIN_DETAILS_FULFILLED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_LOGIN_DETAILS_REJECTED,
      payload: error,
    });
  }
};
