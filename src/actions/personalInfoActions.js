import {
  ADD_PERSONAL_INFO_FULFILLED,
  ADD_PERSONAL_INFO_REJECTED,
  ADD_PERSONAL_INFO_PENDING,
} from "../actionTypes/personalInfo";
import axios from "axios";
export const addPersonalInfo = (data) => async (dispatch) => {
  const {
    token,
    userInfo: { _id: id },
  } = JSON.parse(localStorage.getItem("user"));
  try {
    dispatch({
      type: ADD_PERSONAL_INFO_PENDING,
    });
    const { data: res } = await axios.post(
      `http://localhost:5000/user/personalinfo/${id}`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_PERSONAL_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ADD_PERSONAL_INFO_REJECTED,
      payload: error,
    });
  }
};
