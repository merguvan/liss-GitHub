import axios from "axios";
import {
  USER_REGISTRATION_PENDING,
  USER_REGISTRATION_REJECTED,
  USER_REGISTRATION_FULFILLED,
} from "../actionTypes/userRegistration";
export const signup = (data) => async (dispatch) => {
  console.log(data);
  try {
    dispatch({
      type: USER_REGISTRATION_PENDING,
    });
    const response = await axios.post("http://localhost:5000/user/signup", {
      ...data,
    });

    dispatch({
      type: USER_REGISTRATION_FULFILLED,
      payload: response,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_REGISTRATION_REJECTED,
      payload: error,
    });
  }
};
