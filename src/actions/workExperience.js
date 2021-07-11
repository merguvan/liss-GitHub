import { ADD_WORK_EXPERIENCE } from "../actionTypes";
const {
  token,
  userInfo: { _id: id },
} = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : {
      token: "asdasdad",
      userInfo: {
        _id: "dasdadsa",
      },
    };

export const addAcademicWorkDetails = (data) => {
  return { type: ADD_WORK_EXPERIENCE, payload: data };
};
