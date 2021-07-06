import {
  ADD_PERSONAL_INFO_FULFILLED,
  ADD_PERSONAL_INFO_REJECTED,
  ADD_PERSONAL_INFO_PENDING,
} from "../actionTypes/personalInfo";
import axios from "axios";
export const addPersonalInfo = (data) => async (dispatch) => {
  const id = "id buraya gelecek";
  const token = "token buraya gelecek";
  try {
    dispatch({
      type: ADD_PERSONAL_INFO_PENDING,
    });
    const { data: res } = await axios.post(
      `http://localhost:5000/user/userpersonalinfo/${id}`,
      { data },
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
