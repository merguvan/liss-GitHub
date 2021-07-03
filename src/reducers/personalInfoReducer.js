import {ADD_ADDRESS_INFO, ADD_PERSONAL_INFO} from '../actionTypes'

const initialState={

   personalInformation:{
       personalDetailInformation:{},
       addressInformation:{}
   }

} 

export const personalInfoReducer=(state=initialState,action)=>{
        
    switch(action.type){

        case ADD_PERSONAL_INFO:
        return {
            ...state,
          
            personalInformation:{...state.personalInformation,personalDetailInformation:action.payload}}
        case ADD_ADDRESS_INFO:
           
            return {
                ...state,
             
                personalInformation:{...state.personalInformation,addressInformation:action.payload}
            }    

        default :
        return state
    }
}