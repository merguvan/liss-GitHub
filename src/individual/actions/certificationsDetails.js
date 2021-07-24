import { ADD_CERTIFICATIONS_DETAILS } from "../actionTypes";

export const certificationsDetails = (data) => {
  return { type: ADD_CERTIFICATIONS_DETAILS, payload: data };
};
