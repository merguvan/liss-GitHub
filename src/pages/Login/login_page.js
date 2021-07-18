import React, { useState, useEffect } from "react";
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from "./validator";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { login } from "../../actions/userLogin";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
const loginImg =
  "https://freepikpsd.com/media/2019/10/user-login-png-transparent-6-Transparent-Images.png";
const radios = [
  { name: "Admin", value: "1" },
  { name: "Institutional", value: "2" },
  { name: "Individual", value: "3" },
];

export function Login({ history, location, containerRef }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const userInfo = useSelector((state) => state.userLogin?.userLogin);
  const dispatch = useDispatch();
  const redirect = location?.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      console.log(history);
      history?.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const validateLoginForm = (e) => {
    let errors = {};

    if (isEmpty(formData.email)) {
      errors.email = "Email can't be blank";
    } else if (!isEmail(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (isEmpty(formData.password)) {
      errors.password = "Password can't be blank";
    } else if (isContainWhiteSpace(formData.password)) {
      errors.password = "Password should not contain white spaces";
    } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
      errors.password = "Password's length must between 6 to 16";
    }

    if (isEmpty(errors)) {
      return true;
    } else {
      return errors;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let errors = validateLoginForm();

    if (errors === true) {
      console.log(formData);
      dispatch(login(formData));
    } else {
      setErrors(errors);
      setFormSubmitted(true);
    }
  };

  return (
    <form
      className="login_base-container"
      ref={containerRef}
      onSubmit={handleLogin}
    >
      {/* <div className="login_image">
          <img alt="loginImg" src={loginImg} />
        </div> */}
      <div className="login_header"> Login </div>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            className="radioBtn"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.target.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <div className="login_content">
        <div className="login_form">
          <div
            className="login_form-group"
            validationState={
              formSubmitted ? (errors.email ? "error" : "success") : null
            }
          >
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleInputChange}
            />

            <span style={{ color: "red" }}>{errors.email}</span>
          </div>

          <div
            className="login_form-group"
            validationState={
              formSubmitted ? (errors.password ? "error" : "success") : null
            }
          >
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors.password}</span>
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
