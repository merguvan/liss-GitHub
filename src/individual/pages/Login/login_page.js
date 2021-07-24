import React, { useState, useEffect } from "react";

import { login } from "../../actions/userLogin";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
const loginImg =
  "https://freepikpsd.com/media/2019/10/user-login-png-transparent-6-Transparent-Images.png";

export function Login({ history, location, containerRef }) {
  const [formData, setFormData] = useState({});
  const { userLogin: userInfo, error } = useSelector(
    (state) => state.userLogin
  );
  const dispatch = useDispatch();
  const redirect = location?.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      history?.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    setFormData({});
  };

  return (
    <form
      className="login_base-container"
      ref={containerRef}
      onSubmit={handleLogin}
    >
      {error?.length > 0 && Object.values(formData)?.length === 0 && (
        <Alert variant="danger">{error}</Alert>
      )}
      <div className="login_header"> Login </div>

      <div className="login_content">
        <div className="login_form">
          <div className="login_form-group">
            <input
              type="text"
              name="email"
              placeholder="email"
              value={formData["email"] || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="login_form-group">
            <input
              type="password"
              value={formData["password"] || ""}
              name="password"
              placeholder="password"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="login_footer">
        <button to="/login-register" type="submit" className="login_btn">
          Login
        </button>
      </div>
    </form>
  );
}
