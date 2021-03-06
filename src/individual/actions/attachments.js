import {
  ADD_ATTACHMENT_INFO_FULFILLED,
  ADD_ATTACHMENT_INFO_REJECTED,
  ADD_ATTACHMENT_INFO_PENDING,
  UPDATE_ATTACHMENT_INFO_PENDING,
  UPDATE_ATTACHMENT_INFO_FULFILLED,
  UPDATE_ATTACHMENT_INFO_REJECTED,
  GET_ATTACHMENT_INFO_PENDING,
  GET_ATTACHMENT_INFO_FULFILLED,
  GET_ATTACHMENT_INFO_REJECTED,
} from "../actionTypes/attachments";
import axios from "axios";

export const addAttachmentInfo = (data) => async (dispatch, getState) => {
  const { token, _id: id } = getState().userLogin.userLogin;
  console.log(data, "attaccchments");
  try {
    dispatch({
      type: ADD_ATTACHMENT_INFO_PENDING,
    });

    const { data: res } = await axios.post(
      `http://localhost:5000/user/attachmentinfo/`,
      { ...data, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_ATTACHMENT_INFO_FULFILLED,
      payload: res,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    dispatch({
      type: ADD_ATTACHMENT_INFO_REJECTED,
      payload: message,
    });
  }
};

export const updateAttachmentInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;
  try {
    dispatch({
      type: UPDATE_ATTACHMENT_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/attachmentinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: UPDATE_ATTACHMENT_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ATTACHMENT_INFO_REJECTED,
      payload: error,
    });
  }
};
export const getAttachmentInfo = (data) => async (dispatch, getState) => {
  const { token } = getState().userLogin;
  console.log(data, "attachments");
  try {
    dispatch({
      type: GET_ATTACHMENT_INFO_PENDING,
    });
    const { data: res } = await axios.patch(
      `http://localhost:5000/user/attachmentinfo/`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_ATTACHMENT_INFO_FULFILLED,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_ATTACHMENT_INFO_REJECTED,
      payload: error,
    });
  }
};
