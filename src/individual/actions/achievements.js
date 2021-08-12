import {
  ADD_ACHIEVEMENTS_INFO_FULFILLED,
  ADD_ACHIEVEMENTS_INFO_REJECTED,
  ADD_ACHIEVEMENTS_INFO_PENDING,
  UPDATE_ACHIEVEMENTS_INFO_PENDING,
  UPDATE_ACHIEVEMENTS_INFO_FULFILLED,
  UPDATE_ACHIEVEMENTS_INFO_REJECTED,
  GET_ACHIEVEMENTS_INFO_PENDING,
  GET_ACHIEVEMENTS_INFO_FULFILLED,
  GET_ACHIEVEMENTS_INFO_REJECTED,
} from "../actionTypes/achivements";
import axios from "axios";

export const addAchivements = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_ACHIEVEMENTS_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/achivements/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_ACHIEVEMENTS_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_ACHIEVEMENTS_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateAchivements = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_ACHIEVEMENTS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/achivements/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_ACHIEVEMENTS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ACHIEVEMENTS_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getAchivements = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_ACHIEVEMENTS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/achivements/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_ACHIEVEMENTS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_ACHIEVEMENTS_INFO_REJECTED,
      payload: error,
    });
  }
};
