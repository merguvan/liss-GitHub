import {
  ADD_EDUCATION_INFO_FULFILLED,
  ADD_EDUCATION_INFO_REJECTED,
  ADD_EDUCATION_INFO_PENDING,
  UPDATE_EDUCATION_INFO_PENDING,
  UPDATE_EDUCATION_INFO_FULFILLED,
  UPDATE_EDUCATION_INFO_REJECTED,
  GET_EDUCATION_INFO_PENDING,
  GET_EDUCATION_INFO_FULFILLED,
  GET_EDUCATION_INFO_REJECTED,
} from "../actionTypes/education";
import axios from "axios";

export const addEducationInfo = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_EDUCATION_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/educationinfo/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_EDUCATION_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_EDUCATION_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateEducationInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_EDUCATION_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/educationinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_EDUCATION_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EDUCATION_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getEducationInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_EDUCATION_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/educationinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_EDUCATION_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_EDUCATION_INFO_REJECTED,
      payload: error,
    });
  }
};
