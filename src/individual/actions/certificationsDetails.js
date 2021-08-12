import { ADD_CERTIFICATIONS_DETAILS } from "../actionTypes";

export const certificationsDetails = (data) => {
  return { type: ADD_CERTIFICATIONS_DETAILS, payload: data };
};

import {
  ADD_CERTIFICATIONS_FULFILLED,
  ADD_CERTIFICATIONS_REJECTED,
  ADD_CERTIFICATIONS_PENDING,
  UPDATE_CERTIFICATIONS_PENDING,
  UPDATE_CERTIFICATIONS_FULFILLED,
  UPDATE_CERTIFICATIONS_REJECTED,
  GET_CERTIFICATIONS_PENDING,
  GET_CERTIFICATIONS_FULFILLED,
  GET_CERTIFICATIONS_REJECTED,
} from "../actionTypes/certificationsDetails";
import axios from "axios";

export const addCertificationsDetails = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_CERTIFICATIONS_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/certificationsDetails/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_CERTIFICATIONS_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_CERTIFICATIONS_REJECTED,
      payload: message,
    });
  }
};

export const updateCertificationsDetails = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_CERTIFICATIONS_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/certificationsDetails/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_CERTIFICATIONS_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CERTIFICATIONS_REJECTED,
      payload: error,
    });
  }
};
export const getCertificationsDetails = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_CERTIFICATIONS_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/certificationsDetails/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_CERTIFICATIONS_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_CERTIFICATIONS_REJECTED,
      payload: error,
    });
  }
};
