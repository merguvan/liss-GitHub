import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../actions/userLogin";
import { useSelector } from "react-redux";
const Login = ({ login, location, history }) => {
  const [data, setData] = useState({});
  const userInfo = useSelector((state) => state.userLogin?.userLoginDetails);
  const redirect = location?.search ? location.search.split("=")[1] : "/";
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(data);
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

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
