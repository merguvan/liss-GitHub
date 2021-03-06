import {
  ADD_REMARKS_INFO_FULFILLED,
  ADD_REMARKS_INFO_REJECTED,
  ADD_REMARKS_INFO_PENDING,
  UPDATE_REMARKS_INFO_PENDING,
  UPDATE_REMARKS_INFO_FULFILLED,
  UPDATE_REMARKS_INFO_REJECTED,
  GET_REMARKS_INFO_PENDING,
  GET_REMARKS_INFO_FULFILLED,
  GET_REMARKS_INFO_REJECTED,
} from "../actionTypes/remarks";
import axios from "axios";

export const addRemarksInfo = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_REMARKS_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/remarksinfo/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_REMARKS_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_REMARKS_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateRemarksInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_REMARKS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/remarksinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_REMARKS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_REMARKS_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getRemarksInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_REMARKS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/remarksinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_REMARKS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_REMARKS_INFO_REJECTED,
      payload: error,
    });
  }
};
