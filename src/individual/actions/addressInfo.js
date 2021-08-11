import {
  ADD_ADDRESS_INFO_FULFILLED,
  ADD_ADDRESS_INFO_REJECTED,
  ADD_ADDRESS_INFO_PENDING,
  UPDATE_ADDRESS_INFO_PENDING,
  UPDATE_ADDRESS_INFO_FULFILLED,
  UPDATE_ADDRESS_INFO_REJECTED,
  GET_ADDRESS_INFO_PENDING,
  GET_ADDRESS_INFO_FULFILLED,
  GET_ADDRESS_INFO_REJECTED,
} from "../actionTypes/addressInfo";
import axios from "axios";

export const addAddressInfo = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_ADDRESS_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/addressinfo/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_ADDRESS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ADD_ADDRESS_INFO_REJECTED,
      payload: error,
    });
  }
};

export const updateAddressInfo = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_ADDRESS_INFO_PENDING,
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
      type: UPDATE_ADDRESS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ADDRESS_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getAddressInfo = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  console.log(id);
  try {
    dispatch({
      type: GET_ADDRESS_INFO_PENDING,
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
      type: GET_ADDRESS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_ADDRESS_INFO_REJECTED,
      payload: error,
    });
  }
};
