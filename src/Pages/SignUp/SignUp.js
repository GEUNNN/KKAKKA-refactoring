import React, { Component } from "react";
import { withRouter } from "react-router";
import { signupAPI } from "../../config";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordCheck: "",
      name: "",
      phone: "",
      isEmailvalid: true,
      isPwdInputValid: true,
      isPwdLengthValid: true,
      inputFillPass: true,
    };
  }
  //input값 받는 함수
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // 비밀번호 재입력 체크
  pwdInputCheck = () => {
    const { password, passwordCheck } = this.state;
    if (password !== passwordCheck) {
      this.setState({
        isPwdInputValid: false,
      });
    }
  };

  //비밀번호 글자수 (9자) 체크 함수
  pwdLengthCheck = () => {
    if (this.state.password.length < 9) {
      this.setState({
        isPwdLengthValid: false,
      });
    }
  };

  //input 창에 다 들어가있는지 확인하는 함수
  inputCheck = () => {
    const { email, password, passwordCheck, name, phone } = this.state;
    if (!(email && password && passwordCheck && name && phone)) {
      this.setState({
        inputFillPass: false,
      });
    }
  };

  //이메일 유효성 검사 후 state값을 바꾸는 함수
  emailValidCheck = () => {
    const regExpression =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regExpression.test(this.state.email)) {
      this.setState({
        isEmailvalid: false,
      });
    }
  };

  //fetch 함수로 백엔드와 통신
  getInfo = () => {
    fetch(signupAPI, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        phone: this.state.phone,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === "success_signup") {
          this.props.history.push({
            pathname: "/signup-congratulation",
            state: { userName: this.state.name },
          });
        } else if (result.message === "error_signup_already") {
          alert("이미 존재하는 이메일 또는 휴대폰 번호입니다.");
        }
      });
  };

  // onClick시 실행할 모든 검사 함수
  validCheck = () => {
    const { isEmailvalid, isPwdInputValid, isPwdLengthValid, inputFillPass } =
      this.state;

    this.emailValidCheck();
    this.pwdInputCheck();
    this.pwdLengthCheck();
    this.inputCheck();
    if (isEmailvalid && isPwdInputValid && isPwdLengthValid && inputFillPass) {
      this.getInfo();
    }
  };

  render() {
    const { isEmailvalid, isPwdInputValid, isPwdLengthValid, inputFillPass } =
      this.state;
    return (
      <div className="signUp">
        <Nav />
        <div className="headBox">
          <h1 className="headText">회원가입</h1>
        </div>
        <div className="signUpBox">
          <div className="inputBox">
            <form>
              <div className="emailBox">
                <span className="inputLabelText">이메일 (아이디)</span>
                <input
                  name="email"
                  type="email"
                  className="emailInput"
                  placeholder="예)kkakka@kkakka.kr"
                  onChange={this.handleInput}
                />
                {!isEmailvalid && (
                  <p className="warningText">Email 형식이 올바르지 않습니다.</p>
                )}
              </div>
              <div className="pwdBox">
                <span className="inputLabelText">비밀번호</span>
                <input
                  name="password"
                  type="password"
                  className="pwdInput"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={this.handleInput}
                />
                {!isPwdLengthValid && (
                  <p className="warningText">비밀번호는 9자 이상입니다.</p>
                )}
              </div>
              <div className="pwdCheckBox">
                <span className="inputLabelText">비밀번호확인</span>
                <input
                  name="passwordCheck"
                  type="password"
                  className="pwdCheckInput"
                  placeholder="비밀번호를 한 번 더 입력해주세요."
                  onChange={this.handleInput}
                />
                {!isPwdInputValid && (
                  <p className="warningText">비밀번호가 일치하지 않습니다.</p>
                )}
              </div>
              <div className="nameBox">
                <span className="inputLabelText">이름</span>
                <input
                  name="name"
                  className="nameInput"
                  placeholder="이름을 입력해주세요."
                  onChange={this.handleInput}
                />
              </div>
              <div className="phoneNumBox">
                <span className="inputLabelText">휴대폰 번호</span>
                <input
                  name="phone"
                  type="tel"
                  className="phoneNumInput"
                  placeholder="'-'를 포함해서 입력해주세요."
                  onChange={this.handleInput}
                />
              </div>
              {!inputFillPass && (
                <p className="warningText">모든 값을 입력해주세요.</p>
              )}
            </form>
          </div>
        </div>
        <div className="signUpBtnBox">
          <button className="signUpBtn" onClick={this.validCheck}>
            회원가입
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(SignUp);
