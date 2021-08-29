import {
  ADD_CAPACITY_INFO_PENDING,
  ADD_CAPACITY_INFO_REJECTED,
  ADD_CAPACITY_INFO_FULFILLED,
  UPDATE_CAPACITY_INFO_PENDING,
  UPDATE_CAPACITY_INFO_FULFILLED,
  UPDATE_CAPACITY_INFO_REJECTED,
  GET_CAPACITY_INFO_PENDING,
  GET_CAPACITY_INFO_FULFILLED,
  GET_CAPACITY_INFO_REJECTED,
} from "../actionTypes/capacity";
import axios from "axios";

const id = "sadda";
const token = "dasdad";
export const addCapacity = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_CAPACITY_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/capacityinfo/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_CAPACITY_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_CAPACITY_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateCapacityInfo = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_CAPACITY_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/capacityinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_CAPACITY_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CAPACITY_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getCapacityInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_CAPACITY_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/capacityinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_CAPACITY_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_CAPACITY_INFO_REJECTED,
      payload: error,
    });
  }
};

// import { ADD_CAPACITY_DETAILS } from "../actionTypes"

// export const addCapacityDetails=(data)=>{
//     console.log('action calisyr' ,data)
//     return {type:ADD_CAPACITY_DETAILS,payload:data}
// }
