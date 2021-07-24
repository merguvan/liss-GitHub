import { ADD_AFFILIATIONS } from "../actionTypes";

export const addAffiliations = (data) => {
  return { type: ADD_AFFILIATIONS, payload: data };
};
