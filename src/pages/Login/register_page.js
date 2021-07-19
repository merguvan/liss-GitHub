import React, { useState, useEffecct } from "react";
import { ButtonGroup, ToggleButton, Alert } from "react-bootstrap";

import { connect, useDispatch } from "react-redux";
import { signup } from "../../actions/userRegistration";
import { Link } from "react-router-dom";

const radios = [
  // { name: "Admin", value: "1" },
  { name: "Institutional", value: "2" },
  { name: "Individual", value: "3" },
];

function RegisterPage(props) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData?.gdprConsent) {
      dispatch(signup(formData));
      setFormData({});
    } else {
      setError("Please, accept GdprConsent");
      setFormData({});
    }
  };

  return (
    <form
      className="login_base-container"
      ref={props.containerRef}
      onSubmit={handleRegister}
    >
      {error.length > 0 && Object.keys(formData).length === 0 && (
        <Alert variant="danger">{error}</Alert>
      )}
      <div className="login_header">Register</div>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            className="radioBtn"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name={radio.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                userType: e.target.name,
              });
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {/* <hr /> */}

      <div className="login_content">
        <div className="login_form">
          <div className="login_form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              name="personName"
              placeholder="name"
              value={formData?.personName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="login_form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              name="personSurname"
              placeholder="surname"
              value={formData?.personSurname || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="login_form-group">
            <input
              type="email"
              name="personEmail"
              placeholder="email"
              value={formData?.personEmail || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="login_form-group">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData?.password || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="login_footer">
        <button
          type="submit"
          // onClick={handleUserRegistration}
          className="login_btn"
        >
          Register
        </button>
      </div>
      <div className="gdpr">
        <label class="container">
          <input
            type="checkbox"
            name="gdprConsent"
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.checked,
              });
            }}
            value={formData["gdprConsent"]}
          />
          <span class="checkmark">
            <Link to="/gdpr-consent">Terms&conditions</Link>..
          </span>
        </label>
      </div>
    </form>
  );
}

export default RegisterPage;
