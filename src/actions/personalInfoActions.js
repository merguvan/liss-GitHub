import { ADD_PERSONAL_INFO} from '../actionTypes'
import axios from 'axios'
export const addPersonalInfo=(data)=>{
    
    return dispatch=>(dispatch(
        axios.post('http://localhost:5000/userpersonalinfo',{data}).then(res=>{
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
