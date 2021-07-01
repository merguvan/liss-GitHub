import { ADD_PROJECTS } from "../actionTypes";

export const addProjects = (data) => {
  return { type: ADD_PROJECTS , payload: data };
};