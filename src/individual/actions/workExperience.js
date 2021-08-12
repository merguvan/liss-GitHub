import {
  ADD_WORKEXPERIENCE_FULFILLED,
  ADD_WORKEXPERIENCE_REJECTED,
  ADD_WORKEXPERIENCE_PENDING,
  UPDATE_WORKEXPERIENCE_PENDING,
  UPDATE_WORKEXPERIENCE_FULFILLED,
  UPDATE_WORKEXPERIENCE_REJECTED,
  GET_WORKEXPERIENCE_PENDING,
  GET_WORKEXPERIENCE_FULFILLED,
  GET_WORKEXPERIENCE_REJECTED,
} from "../actionTypes/workExperience";
import axios from "axios";
const {
  token,
  userInfo: { _id: id },
} = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : {
      token: "asdasdad",
      userInfo: {
        _id: "dasdadsa",
      },
    };

export const addWorkExperience = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_WORKEXPERIENCE_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/workExperience/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_WORKEXPERIENCE_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_WORKEXPERIENCE_REJECTED,
      payload: message,
    });
  }
};

export const updateWorkExperience = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_WORKEXPERIENCE_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/addressinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_WORKEXPERIENCE_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_WORKEXPERIENCE_REJECTED,
      payload: error,
    });
  }
};
export const getWorkExperience = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_WORKEXPERIENCE_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/addressinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_WORKEXPERIENCE_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_WORKEXPERIENCE_REJECTED,
      payload: error,
    });
  }
};

