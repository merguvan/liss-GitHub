import React from "react";
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from "./validator";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

import { Alert } from "react-bootstrap";

const loginImg =
  "https://freepikpsd.com/media/2019/10/user-login-png-transparent-6-Transparent-Images.png";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {}, // Contains login form data
      errors: {}, // Contains login field errors
      formSubmitted: false, // Indicates submit status of login form
      loading: false, // Indicates in progress state of login form
      checked: false,
      radioValue: 1,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let { formData } = this.state;
    formData[name] = value;

    this.setState({
      formData: formData,
    });
  };

  validateLoginForm = (e) => {
    let errors = {};
    const { formData } = this.state;

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

  login = (e) => {
    e.preventDefault();

    let errors = this.validateLoginForm();

    if (errors === true) {
      // alert("You are successfully signed in...");
      // window.location.reload();
    } else {
      this.setState({
        errors: errors,
        formSubmitted: true,
      });
    }
  };

  render() {
    const radios = [
      { name: "Admin", value: "1" },
      { name: "Institutional", value: "2" },
      { name: "Individual", value: "3" },
    ];
    const { errors, formSubmitted } = this.state;

    return (
      <form
        className="login_base-container"
        ref={this.props.containerRef}
        onSubmit={this.login}
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
              checked={this.state.radioValue === radio.value}
              onChange={(e) =>
                this.setState({ radioValue: e.currentTarget.value })
              }
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
}
