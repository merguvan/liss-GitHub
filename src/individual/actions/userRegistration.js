import axios from "axios";
import {
  USER_LOGIN_FULFILLED,
  USER_LOGIN_REJECTED,
} from "../actionTypes/userLoginDetails";
import {
  USER_REGISTRATION_PENDING,
  USER_REGISTRATION_REJECTED,
  USER_REGISTRATION_FULFILLED,
  USER_PROFILE_UPDATE_FULFILLED,
  USER_PROFILE_UPDATE_REJECTED,
  USER_PROFILE_UPDATE_PENDING,
} from "../actionTypes/userRegistration";
export const signup = (data) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTRATION_PENDING,
    });
    const { data: res } = await axios.post(
      "http://localhost:5000/user/signup",
      {
        ...data,
      }
    );

    dispatch({
      type: USER_REGISTRATION_FULFILLED,
      payload: res,
    });

    dispatch({
      type: USER_LOGIN_FULFILLED,
      payload: res,
    });
    localStorage.setItem("userInfo", JSON.stringify(res));
  } catch (error) {
    const {
      response: {
        data: { message },
      },
    } = error;

    dispatch({
      type: USER_LOGIN_REJECTED,
      payload: message,
    });

    dispatch({
      type: USER_REGISTRATION_REJECTED,
      payload: message,
    });
  }
};

export const updateUserProfile = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PROFILE_UPDATE_PENDING,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      authorization: getState().userLogin.userLogin.token,
    };
    const { data: res } = await axios.post(
      "http://localhost:5000/user/profile",
      config,
      data
    );

    dispatch({
      type: USER_PROFILE_UPDATE_FULFILLED,
      payload: res,
    });
    dispatch({
      type: USER_LOGIN_FULFILLED,
      payload: res,
    });
    localStorage.setItem("userInfo", JSON.stringify(res));
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: USER_PROFILE_UPDATE_REJECTED,
      payload: message,
    });
  }
};
