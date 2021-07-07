import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

<<<<<<< HEAD
const Login = (props) => {
  const [data, setData] = useState({});
=======
import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {userLoginDetails} from '../actions/userLogin'
import { GET_USER_LOGIN_DETAILS_FULFILLED, GET_USER_LOGIN_DETAILS_REJECTED } from '../actionTypes/useLoginDetails'
>>>>>>> master

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
=======
    const handleChange=(e)=>{
   
        setData({ 
            ...data,
            [e.target.name]:e.target.value
    })
    }
>>>>>>> master

    try {
      const respond = await axios.post("http://localhost:5000/user/login", {
        ...data,
      });
      await props.userLoginDetailsFulfilled(respond);
    } catch (error) {
      console.log(error);
      props.userLoginDetailsRejected(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
