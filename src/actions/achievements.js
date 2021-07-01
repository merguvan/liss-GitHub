import { ADD_ACHIEVEMENTS } from "../actionTypes";

export const addAchievements = (data) => {
  return { type: ADD_ACHIEVEMENTS, payload: data };
};
