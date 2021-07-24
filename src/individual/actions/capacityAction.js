import axios from "axios";
import {
  ADD_CAPACITY_INFO_PENDING,
  ADD_CAPACITY_INFO_REJECTED,
  ADD_CAPACITY_INFO_FULFILLED,
} from "../actionTypes/capacity";

const {
  token,
  userInfo: { _id: id },
} = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : {
      token: "token",
      userInfo: {
        _id: 12345
    }};

export const addCapacity = (capacity) => async (dispatch) => {
  console.log("token=>" + token);
  console.log("id=>" + id);
  console.log(capacity);
  try {
    dispatch({
      type: ADD_CAPACITY_INFO_PENDING,
    });
    const { data } = await axios.post(
      `http://localhost:5000/user/capacity/${id}`,
      { ...capacity, user: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    dispatch({
      type: ADD_CAPACITY_INFO_FULFILLED,
      payload: data.capacity,
    });
  } catch (error) {
    dispatch({
      type: ADD_CAPACITY_INFO_REJECTED,
      payload: error,
    });
    console.log(error);
  }
};



// import { ADD_CAPACITY_DETAILS } from "../actionTypes"

// export const addCapacityDetails=(data)=>{
//     console.log('action calisyr' ,data)
//     return {type:ADD_CAPACITY_DETAILS,payload:data}
// }