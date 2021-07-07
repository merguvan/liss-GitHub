import {
  ADD_ADDRESS_INFO_FULFILLED,
  ADD_ADDRESS_INFO_REJECTED,
  ADD_ADDRESS_INFO_PENDING,
} from "../actionTypes/addressInfo";
import axios from "axios";
export const addAddressInfo = (data) => async (dispatch) => {
  const id = "id buraya gelecek";
  const token = "token buraya gelecek";
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
