import { ADD_ADDRESS_INFO} from '../actionTypes'
import axios from 'axios'
export const addPersonalInfo=(data)=>{
    
    return dispatch=>(dispatch(
        {
            type:ADD_ADDRESS_INFO,
            payload:axios.post('http://localhost:5000/user/userpersonalinfo/60df61f8e32a48f4cdd245d9',{data},{
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25FbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2MGRmNjFmOGUzMmE0OGY0Y2RkMjQ1ZDkiLCJpYXQiOjE2MjUyNzQ1MjksImV4cCI6MTYyNTI4NTMyOX0.-1mo--CnA9pprkhVKcQuoaIynuYEnh18OasOclDOTHo` 
                  }
            })

        }

        
        ))
}

// export function addNewMovie({title,cover}){
//     console.log("Aciton DATA",title,cover);
//     return dispatch => {
//         dispatch(
//             {
//                 type:"ADD_MOVIES",
//                 payload:axios.post(`${API_BASE}/movies`,{title,cover})
//             }
//         )
//     }
// }
