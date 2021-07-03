import axios from "axios"
import { GET_USER_LOGIN_DETAILS} from "../actionTypes"

export const userLoginDetails=(data)=>{
    console.log(data)
    return dispatch=>(dispatch(
        axios.post('http://localhost:5000/user/login',{...data})
        .then(res=>{
        
            return dispatch({
            type:GET_USER_LOGIN_DETAILS,
            payload:res.data
            })
        }).catch(err=>{
            console.log('erdal')
            console.log(err)
        })
        
        )
        )

    
}