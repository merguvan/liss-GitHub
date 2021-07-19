import React, { useState, useEffecct, useEffect } from "react";
import { ButtonGroup, ToggleButton, Alert } from "react-bootstrap";

import { connect, useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/userRegistration";
import { Link } from "react-router-dom";

function RegisterPage({ containerRef, history, location }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  const [radioValue, setRadioValue] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [toggleCheckbox, setTogglecheckBox] = useState(false);
  const dispatch = useDispatch();
  const { userLogin: userInfo, error: storeError } = useSelector(
    (state) => state.userLogin
  );

  const redirect = location?.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      console.log(history);
      history?.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleInputChange = (event) => {
    if (event.target.name === "userType") {
      console.log(event.target.value);
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (gdprConsent) {
      dispatch(signup({ ...formData, gdprConsent }));
      setFormData({});
    } else {
      setError("Please, accept GdprConsent");
      setFormData({});
    }
  };

  return (
    <form
      className="login_base-container"
      ref={containerRef}
      onSubmit={handleRegister}
    >
      {error.length > 0 && Object.keys(formData).length === 0 && (
        <Alert variant="danger">{error}</Alert>
      )}
      <div className="login_header">Register</div>
      <ButtonGroup>
        <ToggleButton
          className="radioBtn"
          type="radio"
          name="userType"
          onChange={handleInputChange}
          checked={formData["userType"] === "Institutional" && true}
          value="Institutional"
        >
          Institutional
        </ToggleButton>
        <ToggleButton
          className="radioBtn"
          type="radio"
          name="userType"
          onChange={handleInputChange}
          checked={formData["userType"] === "Individual" && true}
          value="Individual"
        >
          Individual
        </ToggleButton>
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
            onClick={(e) => {
              setGdprConsent(!gdprConsent);
            }}
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
