import {
  ADD_CERTIFICATIONS_INFO_FULFILLED,
  ADD_CERTIFICATIONS_INFO_REJECTED,
  ADD_CERTIFICATIONS_INFO_PENDING,
  UPDATE_CERTIFICATIONS_INFO_PENDING,
  UPDATE_CERTIFICATIONS_INFO_FULFILLED,
  UPDATE_CERTIFICATIONS_INFO_REJECTED,
  GET_CERTIFICATIONS_INFO_PENDING,
  GET_CERTIFICATIONS_INFO_FULFILLED,
  GET_CERTIFICATIONS_INFO_REJECTED,
} from "../actionTypes/certificationsDetails";
import axios from "axios";

export const addCertificationsDetails = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_CERTIFICATIONS_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/certificationsDetailsInfo/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_CERTIFICATIONS_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_CERTIFICATIONS_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateCertificationsDetails = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_CERTIFICATIONS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/certificationsDetailsInfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_CERTIFICATIONS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CERTIFICATIONS_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getCertificationsDetails = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_CERTIFICATIONS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/certificationsDetailsInfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_CERTIFICATIONS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_CERTIFICATIONS_INFO_REJECTED,
      payload: error,
    });
  }
};
