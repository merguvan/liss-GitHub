import React from "react";
import "./style.css";

const loginImg =
  "https://freepikpsd.com/media/2019/10/user-login-png-transparent-6-Transparent-Images.png";

export class Login extends React.Component {
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="header"> Login </div>

        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" name="username" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button to="/login-register" type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
