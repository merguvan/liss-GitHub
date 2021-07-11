import axios from "axios";
import {
  ADD_ACHIEVEMENTS_INFO_PENDING,
  ADD_ACHIEVEMENTS_INFO_REJECTED,
  ADD_ACHIEVEMENTS_INFO_FULFILLED,
} from "../actionTypes/achivements";

const {
  token,
  userInfo: { _id: id },
} = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : {
      token: "token",
      userInfo: {
        _id: 12345,
      },
    };

export const addAchivements = (achievements) => async (dispatch) => {
  console.log("token=>" + token);
  console.log("id=>" + id);
  console.log(achievements);
  try {
    dispatch({
      type: ADD_ACHIEVEMENTS_INFO_PENDING,
    });
    const { data } = await axios.post(
      `http://localhost:5000/user/achievements/${id}`,
      { ...achievements, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    dispatch({
      type: ADD_ACHIEVEMENTS_INFO_FULFILLED,
      payload: data.achievements,
    });
  } catch (error) {
    dispatch({
      type: ADD_ACHIEVEMENTS_INFO_REJECTED,
      payload: error,
    });
    console.log(error);
  }
};
