import {
  ADD_REFERENCE_INFO_FULFILLED,
  ADD_REFERENCE_INFO_REJECTED,
  ADD_REFERENCE_INFO_PENDING,
  UPDATE_REFERENCE_INFO_PENDING,
  UPDATE_REFERENCE_INFO_FULFILLED,
  UPDATE_REFERENCE_INFO_REJECTED,
  GET_REFERENCE_INFO_PENDING,
  GET_REFERENCE_INFO_FULFILLED,
  GET_REFERENCE_INFO_REJECTED,
} from "../actionTypes/reference";
import axios from "axios";

export const addReferenceInfo = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_REFERENCE_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/referenceinfo/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_REFERENCE_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_REFERENCE_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateReferenceInfo = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_REFERENCE_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/referenceinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_REFERENCE_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_REFERENCE_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getReferenceInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_REFERENCE_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/referenceinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_REFERENCE_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_REFERENCE_INFO_REJECTED,
      payload: error,
    });
  }
};
