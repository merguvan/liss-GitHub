import {
  ADD_PERSONAL_INFO_FULFILLED,
  ADD_PERSONAL_INFO_REJECTED,
  ADD_PERSONAL_INFO_PENDING,
  UPDATE_PERSONAL_INFO_FULFILLED,
  UPDATE_PERSONAL_INFO_REJECTED,
  UPDATE_PERSONAL_INFO_PENDING,
  GET_PERSONAL_INFO_FULFILLED,
  GET_PERSONAL_INFO_REJECTED,
  GET_PERSONAL_INFO_PENDING,
} from "../actionTypes/personalInfo";
import axios from "axios";

const {
  token,
  userInfo: { _id: id },
} = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : {
      token: "token",
      userInfo: {
        _id: 12345,
      },
    };

export const addPersonalInfo = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_PERSONAL_INFO_PENDING,
    });
    const { data: res } = await axios.post(
      `http://localhost:5000/user/personalinfo/${id}`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_PERSONAL_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ADD_PERSONAL_INFO_REJECTED,
      payload: error,
    });
  }
};
export const updatePersonalInfo = (data) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PERSONAL_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/personalinfo/${id}`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_PERSONAL_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PERSONAL_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getPersonalInfo = (data) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PERSONAL_INFO_PENDING,
    });
    const { data: res } = await axios.get(
      `http://localhost:5000/user/personalinfo/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_PERSONAL_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_PERSONAL_INFO_REJECTED,
      payload: error,
    });
  }
};
