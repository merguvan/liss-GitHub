import axios from "axios";
import {
  USER_LOGIN_FULFILLED,
  USER_LOGIN_PENDING,
  USER_LOGIN_REJECTED,
  USER_LOGOUT,
} from "../actionTypes/userLoginDetails";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_PENDING,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data: res } = await axios.post(
      "http://localhost:5000/user/login",
      {
        ...data,
      },
      config
    );

    dispatch({
      type: USER_LOGIN_FULFILLED,
      payload: res,
    });
    localStorage.setItem("userInfo", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_REJECTED,
      payload: error,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};
