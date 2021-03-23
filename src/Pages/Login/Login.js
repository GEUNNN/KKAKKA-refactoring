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

  isEmailValid = e => {
    e.preventDefault();
    const regExpression = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,12}$/i;

    if (!regExpression.test(this.state.email)) {
      this.setState({
        isValid: false,
      });
    } else {
      this.setState({ isNotValid: true });
    }
  };

  goToMain = e => {
    // this.props.history.push("/main");
    // 추후 백엔드 데이터를 받으면 아래 함수 사용 예정
    /* if(response.message === "valid user") {
      this.props.history.push('/main') 
    } else {
      alert ("존재하지 않는 계정입니다. 가입 후 이용해주세요!")
      this.props.history.push('/signup')
    }*/

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
          alert("아이디 또는 비밀번호를 확인해주세요.");
        }
      });
    e.preventDefault();
  };

  checkInfoLogin = () => {
    this.isEmailValid();
    this.goToMain();
  };

  render() {
    console.log(this.state);
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
