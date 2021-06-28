import { ADD_WORK_EXPERIENCE} from "../actionTypes"

export const addAcademicWorkDetails=(data)=>{
        console.log('acction calisyor')  
    return {type:ADD_WORK_EXPERIENCE,payload:data}
}