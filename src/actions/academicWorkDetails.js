import { ADD_ACADEMIC_WORK_DETAILS } from "../actionTypes";

export const addAcademicWorkDetails = (data) => {
  return { type: ADD_ACADEMIC_WORK_DETAILS, payload: data };
};
