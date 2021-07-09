<<<<<<< HEAD

import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {userLoginDetails} from '../actions/userLogin'
import { GET_USER_LOGIN_DETAILS_FULFILLED, GET_USER_LOGIN_DETAILS_REJECTED } from '../actionTypes/userLoginDetails'

 const Login = (props) => {
    
     const [data,setData]=useState({})

const handleChange=(e)=>{
   
    setData({ 
        ...data,
        [e.target.name]:e.target.value
    })
}

    const handleSubmit=async(e)=>{
        e.preventDefault()
     
    try {
        const respond= await axios.post("http://localhost:5000/user/login",{...data})
        await props.userLoginDetailsFulfilled(respond)
    } catch (error) {
        console.log(error)
        props.userLoginDetailsRejected(error)
    }
        
    }
    
    return (
=======
import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { userLoginDetails } from "../actions/userLogin";

const Login = (props) => {
  const { userLoginDetails } = props;
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    userLoginDetails(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
>>>>>>> master
        <div>
          <label htmlFor="gmail">gmail</label>
          <input onChange={handleChange} type="text" name="personEmail" />
        </div>
        <div>
          <label htmlFor="gmail">password</label>
          <input onChange={handleChange} type="text" name="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = {
  userLoginDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
