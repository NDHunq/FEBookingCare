import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginAPI } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPass: false,
      errMessage: "",
    };
  }
  handleOnChangeUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLoginAPI(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
      }
    } catch (error) {
      if (error.response)
        if (error.response.data)
          this.setState({
            errMessage: error.response.data.message,
          });
    }
  };
  handleShowHidePass = () => {
    this.setState({
      isShowPass: !this.state.isShowPass,
    });
  };
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleLogin();
    }
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your ussername"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUserName(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="custom-input-pass">
                <input
                  type={this.state.isShowPass ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={(event) => this.handleOnChangePassword(event)}
                  onKeyDown={(event) => this.handleKeyDown(event)}
                />
                <span
                  className="show-pass"
                  onClick={() => this.handleShowHidePass()}>
                  <i
                    className={
                      this.state.isShowPass ? "far fa-eye" : "far fa-eye-slash"
                    }></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}>
                Login
              </button>
            </div>

            <div className="col-12">
              <span className="forgot-pass">Forgot your password</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span>Or login with:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
