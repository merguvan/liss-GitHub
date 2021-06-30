import { ADD_CAPACITY_DETAILS } from "../actionTypes"

export const addCapacityDetails=(data)=>{
    console.log('action calisyr' ,data)
    return {type:ADD_CAPACITY_DETAILS,payload:data}
}