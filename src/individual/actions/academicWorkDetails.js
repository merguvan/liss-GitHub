import {
  ADD_ACADEMIC_INFO_FULFILLED,
  ADD_ACADEMIC_INFO_REJECTED,
  ADD_ACADEMIC_INFO_PENDING,
  UPDATE_ACADEMIC_INFO_PENDING,
  UPDATE_ACADEMIC_INFO_FULFILLED,
  UPDATE_ACADEMIC_INFO_REJECTED,
  GET_ACADEMIC_INFO_PENDING,
  GET_ACADEMIC_INFO_FULFILLED,
  GET_ACADEMIC_INFO_REJECTED,
} from "../actionTypes/academicInfo";
import axios from "axios";

export const addAcademicWorkDetails = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;
  console.log(data, "=>data");
  try {
    dispatch({
      type: ADD_ACADEMIC_INFO_PENDING,
    });

    const res = await axios.post(
      `http://localhost:5000/user/academicWorkDetails`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_ACADEMIC_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_ACADEMIC_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateAcademicWorkDetails = (data) => async (
  dispatch,
  getState
) => {
  const { token } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_ACADEMIC_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/academicWorkDetails`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_ACADEMIC_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ACADEMIC_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getAcademicWorkDetails = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_ACADEMIC_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/academicWorkDetails`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_ACADEMIC_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_ACADEMIC_INFO_REJECTED,
      payload: error,
    });
  }
};
