// import { ADD_ACADEMIC_WORK_DETAILS } from "../actionTypes";

// const {
//   token,
//   userInfo: { _id: id },
// } = JSON.parse(localStorage.getItem("user"))
//   ? JSON.parse(localStorage.getItem("user"))
//   : {
//       token: "asdasdad",
//       userInfo: {
//         _id: "dasdadsa",
//       },
//     };

// export const addAcademicWorkDetails = (data) => {
//   return { type: ADD_ACADEMIC_WORK_DETAILS, payload: data };
// };



import axios from "axios";
import {
  ADD_ACADEMIC_INFO_PENDING,
  ADD_ACADEMIC_INFO_REJECTED,
  ADD_ACADEMIC_INFO_FULFILLED,
} from "../actionTypes/AcademicInfo";

const {
  token,
  userInfo: { _id: id },
} = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : {
      token: "token",
      userInfo: {
        _id: 12345
    }};

export const addAcademicInfo = (academicInfo) => async (dispatch) => {
  console.log("token=>" + token);
  console.log("id=>" + id);
  console.log(academicInfo);
  try {
    dispatch({
      type: ADD_ACADEMIC_INFO_PENDING,
    });
    const { data } = await axios.post(
      `http://localhost:5000/user/academicInfo/${id}`,
      { ...academicInfo, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    dispatch({
      type: ADD_ACADEMIC_INFO_FULFILLED,
      payload: data.academicInfo,
    });
  } catch (error) {
    dispatch({
      type: ADD_ACADEMIC_INFO_REJECTED,
      payload: error,
    });
    console.log(error);
  }
};
