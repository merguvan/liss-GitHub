import {
  ADD_PERSONAL_INFO_FULFILLED,
  ADD_PERSONAL_INFO_REJECTED,
  ADD_PERSONAL_INFO_PENDING,
} from "../actionTypes/personalInfo";
import axios from "axios";
export const addPersonalInfo = (data) => async (dispatch) => {
  const id = "60df61f8e32a48f4cdd245d9";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25FbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2MGRmNjFmOGUzMmE0OGY0Y2RkMjQ1ZDkiLCJpYXQiOjE2MjU2MTk1MDMsImV4cCI6MTYyNTYzMDMwM30.3IcL5DOOiaGnLaMF57f8_TFXEmDL2oyBJljGZczs-R4";
  try {
    dispatch({
      type: ADD_PERSONAL_INFO_PENDING,
    });
    const { data: res } = await axios.post(
      `http://localhost:5000/user/personalinfo/${id}`,
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
