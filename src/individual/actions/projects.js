import {
  ADD_PROJECTS_INFO_FULFILLED,
  ADD_PROJECTS_INFO_REJECTED,
  ADD_PROJECTS_INFO_PENDING,
  UPDATE_PROJECTS_INFO_PENDING,
  UPDATE_PROJECTS_INFO_FULFILLED,
  UPDATE_PROJECTS_INFO_REJECTED,
  GET_PROJECTS_INFO_PENDING,
  GET_PROJECTS_INFO_FULFILLED,
  GET_PROJECTS_INFO_REJECTED,
} from "../actionTypes/projects";
import axios from "axios";

export const addProjectsInfo = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;

  try {
    dispatch({
      type: ADD_PROJECTS_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/projectsinfo/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_PROJECTS_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_PROJECTS_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateProjectsInfo = (data) => async (dispatch, getState) => {
  const { token, id } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_PROJECTS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/projectsinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_PROJECTS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROJECTS_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getProjectsInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;

  try {
    dispatch({
      type: GET_PROJECTS_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/projectsinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_PROJECTS_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECTS_INFO_REJECTED,
      payload: error,
    });
  }
};
