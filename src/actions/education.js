import { ADD_EDUCATION } from "../actionTypes"

export const addEducation=(data)=>{
    console.log('action calisyr' ,data)
    return {type:ADD_EDUCATION,payload:data}
}