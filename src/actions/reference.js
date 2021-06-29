import { ADD_REFERENCE} from '../actionTypes'
export const addReference=(data)=>{
    
    return dispatch=>(dispatch({type:ADD_REFERENCE,payload:data}))
}
