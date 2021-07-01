import { ADD_PERSONAL_INFO} from '../actionTypes'
import axios from 'axios'
export const addPersonalInfo=(data)=>{
    
    return dispatch=>(dispatch({
        type:ADD_PERSONAL_INFO,
        payload:axios.post('http://localhost:5000/userpersonalinfo',{...data}).then(res=>res.data)}))
}

