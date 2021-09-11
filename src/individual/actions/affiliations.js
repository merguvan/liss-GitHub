import {
  ADD_AFFILIATIONS_INFO_FULFILLED,
  ADD_AFFILIATIONS_INFO_REJECTED,
  ADD_AFFILIATIONS_INFO_PENDING,
  UPDATE_AFFILIATIONS_INFO_PENDING,
  UPDATE_AFFILIATIONS_INFO_FULFILLED,
  UPDATE_AFFILIATIONS_INFO_REJECTED,
  GET_AFFILIATIONS_INFO_PENDING,
  GET_AFFILIATIONS_INFO_FULFILLED,
  GET_AFFILIATIONS_INFO_REJECTED,
} from "../actionTypes/affiliations";
import axios from "axios";

export const addAffiliationsInfo = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;
  console.log(data, "=>affiliations");
  try {
    dispatch({
      type: ADD_AFFILIATIONS_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/AffiliationsInfo/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_AFFILIATIONS_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_AFFILIATIONS_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateAffiliationsInfo = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_AFFILIATIONS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/AffiliationsInfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_AFFILIATIONS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_AFFILIATIONS_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getAffiliationsInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_AFFILIATIONS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/AffiliationsInfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_AFFILIATIONS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_AFFILIATIONS_INFO_REJECTED,
      payload: error,
    });
  }
};
