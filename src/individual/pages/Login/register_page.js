import React, { useState, useEffect } from "react";
import { ButtonGroup, ToggleButton, Alert } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/userRegistration";
import { Link } from "react-router-dom";

function RegisterPage({ containerRef, history, location }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const [gdprConsent, setGdprConsent] = useState(false);

  const dispatch = useDispatch();
  const { userLogin: userInfo, error: storeError } = useSelector(
    (state) => state.userLogin
  );

  const redirect = location?.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history?.push(redirect);
    }
    if (storeError) {
      setError(storeError);
    } else {
      setError("");
    }
    if (Object.keys(formData).length > 0) {
      setError("");
    }
  }, [history, userInfo, redirect, formData, setError, storeError]);

  const handleInputChange = (event) => {
    if (
      formData.userType &&
      (event.target.name === "Institutional" ||
        event.target.name === "Individual")
    ) {
      setFormData({});
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
    console.log(formData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (gdprConsent) {
      if (
        Object.values(formData).every((value) => value) &&
        Object.values(formData).length === 7
      ) {
        if (formData?.password.length >= 6) {
          if (formData.password === formData.password_confirmation) {
            dispatch(signup({ ...formData, gdprConsent }));
            setFormData({});
            setGdprConsent(false);
          } else {
            setError("Confirmation password is incorrect");
          }
        } else {
          setError("Your password should be longer than 6 characters");
        }
      } else {
        setError("Please fill in the form completely");
      }
    } else {
      setError("Please accept our terms & conditions");
    }
  };
  console.log(Object.values(formData).length);
  return (
    <form
      className="login_base-container"
      ref={containerRef}
      onSubmit={handleRegister}
    >
      {(error?.length > 0 && <Alert variant="danger">{error}</Alert>) ||
        (userInfo &&
          !userInfo?.isConfirmed &&
          Object.keys(formData).length === 0 && (
            <Alert className="alert" variant="danger">
              {userInfo?.message || (storeError?.length > 0 && storeError)}
            </Alert>
          ))}
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
          <span>Institutional</span>
        </ToggleButton>
        <ToggleButton
          className="radioBtn"
          type="radio"
          name="userType"
          onChange={handleInputChange}
          checked={formData["userType"] === "Individual" && true}
          value="Individual"
        >
          <span>Individual</span>
        </ToggleButton>
      </ButtonGroup>
      {/* <hr /> */}
      <div>
        {formData.userType === "Institutional" ? (
          <div className="login_content">
            <div className="login_form">
              <div className="login_form-group">
                <input
                  type="text"
                  name="i.institutionalName"
                  placeholder="institution name"
                  value={formData["i.institutionalName"] || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="login_form-group-name-surname">
                <input
                  type="text"
                  name="i.personName"
                  placeholder="name"
                  value={formData["i.personName"] || ""}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="i.personSurname"
                  placeholder="surname"
                  value={formData["i.personSurname"] || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="login_form-group">
                <input
                  type="email"
                  name="i.personEmail"
                  placeholder="email"
                  value={formData["i.personEmail"] || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="login_form-group">
                <input
                  type="password"
                  name="i.password"
                  placeholder="password"
                  value={formData["i.password"] || ""}
                  onChange={handleInputChange}
                />
              </div>
              {formData["i.password"] && (
                <div className="login_form-group">
                  <input
                    type="password"
                    value={formData["i.password_confirmation"] || ""}
                    name="i.password_confirmation"
                    placeholder="confirm your password"
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="login_content">
            <div className="login_form">
              <div className="login_form-group-name-surname">
                <input
                  type="text"
                  name="personName"
                  placeholder="name"
                  value={formData?.personName || ""}
                  onChange={handleInputChange}
                />
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
              {formData.password && (
                <div className="login_form-group">
                  <input
                    type="password"
                    value={formData["password_confirmation"] || ""}
                    name="password_confirmation"
                    placeholder="confirm your password"
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="gdpr">
        <label class="container">
          <input
            type="checkbox"
            name="gdprConsent"
            checked={gdprConsent}
            onClick={(e) => {
              setGdprConsent(!gdprConsent);
              setFormData({
                ...formData,
                gdprConsent: !gdprConsent,
              });
            }}
          />
          <span class="checkmark">
            <Link to="/gdpr-consent">Terms&conditions</Link>..
          </span>
        </label>
      </div>
      <div className="login_footer">
        <button type="submit" className="login_btn">
          Register
        </button>
      </div>
    </form>
  );
}

export default RegisterPage;
