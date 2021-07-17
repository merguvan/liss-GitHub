import React from "react";
import logo from "./logo.png";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from "./validator";
import { connect } from "react-redux";
import { signup } from "../../actions/userRegistration";
class Register extends React.Component {
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
  handleUserRegistration = () => {
    this.props.signup(this.state.formData);
  };
  render() {
    const radios = [
      // { name: "Admin", value: "1" },
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
        {/* <div className="login_logo">
          <img src={logo} alt="Logo" />

        </div> */}
        {/* <hr /> */}
        {/* 
        <div className="login_radio_buttons">
          <input
            id="individual"
            name="login_radio_button"
            value="individual_login"
            type="radio"
          ></input>
          <label for="login_radio_button">Individual</label>

          <input
            id="institutional"
            name="login_radio_button"
            value="institutional_login"
            type="radio"
          ></input>
          <label for="login_radio_button">Institutional</label>

          <input
            id="admin"
            name="login_radio_button"
            value="admin_login"
            type="radio"
          ></input>
          <label for="login_radio_button">Admin</label>
        </div> */}
        <div className="login_header">Register</div>
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
        {/* <hr /> */}

        <div className="login_content">
          <div className="login_form">
            <div className="login_form-group">
              {/* <label htmlFor="username">Name - Surname</label> */}
              <input
                type="text"
                name="username"
                required
                placeholder="name and surname"
                onChange={(e) =>
                  this.setState({
                    formData: {
                      ...this.state.formData,
                      personName: e.target.value.split(" ")[0],
                      personSurname: e.target.value.split(" ")[1],
                    },
                  })
                }
              />
            </div>

            <div
              className="login_form-group"
              validationState={
                formSubmitted ? (errors.email ? "error" : "success") : null
              }
            >
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                name="personEmail"
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
          <button
            type="submit"
            onClick={this.handleUserRegistration}
            className="login_btn"
          >
            Register
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
