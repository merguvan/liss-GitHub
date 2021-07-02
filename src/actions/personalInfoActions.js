import { ADD_PERSONAL_INFO} from '../actionTypes'
import axios from 'axios'
export const addPersonalInfo=(data)=>{
    console.log(data)
    return dispatch=>(dispatch(
        axios.post('http://localhost:5000/user/userpersonalinfo/60df61f8e32a48f4cdd245d9',{data},{
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25FbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2MGRmNjFmOGUzMmE0OGY0Y2RkMjQ1ZDkiLCJpYXQiOjE2MjUyNjE3NzYsImV4cCI6MTYyNTI3MjU3Nn0.8GrxrISyOzhcdRBzbbWt7Ualdh8C29VB_DB7I9oU3Ms` 
              }
        }).then(res=>{
            return dispatch({
            type:ADD_PERSONAL_INFO,
            payload:res.data
            })
        })))
}

// export const getData = (data) => ({
//     type: GET_USERS,
//     payload: data,
//   });
//   export function getUsers() {
//     return (dispatch) => {
//       axios.get(`${API_BASE}`).then((result) => dispatch(getData(result.data)));
//     };
//   }
