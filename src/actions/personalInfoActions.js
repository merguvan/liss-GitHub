import { ADD_PERSONAL_INFO} from '../actionTypes'
import axios from 'axios'
export const addPersonalInfo=(data)=>{
    
    return dispatch=>(dispatch(
        axios.post('http://localhost:5000/user/userpersonalinfo/60df61f8e32a48f4cdd245d9',{data},{
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25FbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2MGRmNjFmOGUzMmE0OGY0Y2RkMjQ1ZDkiLCJpYXQiOjE2MjUyNzQ1MjksImV4cCI6MTYyNTI4NTMyOX0.-1mo--CnA9pprkhVKcQuoaIynuYEnh18OasOclDOTHo` 
              }
        }).then(res=>{
            
            return dispatch({
            type:ADD_PERSONAL_INFO,
            payload:data
            })
        }).catch(err=>{
            console.log(err)
        })
        
        ))
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
