import React from "react";
import login from "./logo.png";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="image_logo">
          <img src={login}></img>
        </div>
        <hr/>
              <div className="radio_buttons">
                <input id="individual" name="login_radio_button" value="individual_login" type="radio"></input>
                <label for="login_radio_button">Individual</label>

                <input id="institutional" name="login_radio_button" value="institutional_login" type="radio"></input>
                <label for="login_radio_button">Institutional</label>

                <input id="admin" name="login_radio_button" value="admin_login" type="radio"></input>
                <label for="login_radio_button">Admin</label>

              </div>
            <hr/>
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Name - Surname</label>
              <input type="text" name="username" placeholder="name and surname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
