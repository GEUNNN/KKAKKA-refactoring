import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { loginAPI } from "../../config";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isValid: true,
    };
  }

  handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = e => {
    const regExpression = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,12}$/i;

    if (
      regExpression.test(this.state.email) &&
      this.state.password.length > 8
    ) {
      fetch(loginAPI, {
        method: "POST",
        body: JSON.stringify({
          id: this.state.email,
          password: this.state.password,
        }),
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.message === "success_signin") {
            this.props.history.push("/main");
          } else if (result.message === "error_password_matching") {
            alert("비밀번호를 다시 입력해주세요");
          } else if (result.message === "error_mutiple_id" || "error_no_id") {
            alert("아이디(이메일)를 다시 입력해주세요");
          }
        });
    } else {
      this.setState({
        isValid: false,
      });
    }
    e.preventDefault();
  };

  checkInfoLogin = e => {
    this.isEmailValid(() => {
      this.goToMain();
      e.preventDefault();
    });
  };

  render() {
    const { isValid } = this.state;
    return (
      <div className="login">
        <div className="loginBox">
          <h1 className="loginText">로그인</h1>
          <form className="loginField">
            <input
              className="id"
              name="email"
              type="email"
              placeholder="아이디(이메일)"
              onChange={this.handleInput}
            />
            <input
              className="pwd"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
            />
            {!isValid && (
              <div className="validation">
                <p>Email/비밀번호를 정확히 입력해주세요.</p>
              </div>
            )}
            <div className="inputBtnBuffer"></div>
            <button className="loginBtn" onClick={this.goToMain}>
              로그인
            </button>
            <div className="signUpArea">
              <button className="signUpBtn">
                <Link to="/signup" className="signUpLink">
                  회원가입
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
