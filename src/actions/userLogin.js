import axios from "axios"


export const userLoginDetails=(data)=>{
    console.log(data)
return dispatch=>dispatch({
    type:"GET_USER_LOGIN_DETAILS",
    payload:axios.post("http://localhost:5000/user/login",{...data})
})



}
  
    


