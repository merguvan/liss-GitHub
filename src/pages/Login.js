import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import {userLoginDetails} from '../actions/userLogin'
import App from '../App'
 const Login = (props) => {
     const history=useHistory()
     const [data,setData]=useState({})

const handleChange=(e)=>{
   
    setData({
        ...data,
        [e.target.name]:e.target.value
    })
}

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(data)
        userLoginDetails(data)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
           <div>
           <label htmlFor="gmail">gmail</label>
            <input 
            onChange={handleChange}
            type="text" name='personEmail'/>
           </div>
           <div>
           <label htmlFor="gmail">gmail</label>
            <input 
            onChange={handleChange}
            type="text" name='password'/>
           </div>
            <input type="submit" value="Login"/>

            </form >
        </div>
    )
}

const mapStateToProps = (state) => {
 
    return {
        state
    }
}

const mapDispatchToProps = {
userLoginDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
