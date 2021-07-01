import { ADD_REMARKS } from "../actionTypes";

export const addRemarks = (data) => {
  return { type: ADD_REMARKS , payload: data };
};