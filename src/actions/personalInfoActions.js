import { ADD_PERSONAL_INFO} from '../actionTypes'
export const addPersonalInfo=(data)=>{
    
    return dispatch=>(dispatch({type:ADD_PERSONAL_INFO,payload:data}))
}

// export const addAddressInfo=(data)=>{
  
// return dispatch=>(c
// }