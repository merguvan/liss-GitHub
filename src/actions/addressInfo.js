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

export const addAddressInfo = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_ADDRESS_INFO_PENDING,
    });
    const { data: res } = await axios.post(
      `http://localhost:5000/user/addressinfo/${id}`,
      { data },
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
export const updateAddressInfo = (data) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ADDRESS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/addressinfo/${id}`,
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
export const getAddressInfo = (data) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ADDRESS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/addressinfo/${id}`,
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
