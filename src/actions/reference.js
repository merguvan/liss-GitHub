import { ADD_REFERENCE } from "../actionTypes";
export const addReferenceAction = (data) => {
  console.log(data);
  return (dispatch) => dispatch({ type: ADD_REFERENCE, payload: data });
};
