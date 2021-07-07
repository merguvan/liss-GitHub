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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    userLoginDetails(data);
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

const mapDispatchToProps = { userLoginDetails };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
