import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./Congratulation.scss";

export class Congratulation extends Component {
  render() {
    return (
      <div className="congratulation">
        <Nav />
        <div className="congratsupperBox">
          <header className="textBox">
            <p className="nameTxt">{`${this.props.location.state.userName}님,`}</p>
            <p className="congratTxt">KKAKKA의 회원이 되신걸 축하드립니다 :)</p>
            <img
              src="/images/coupon.png"
              alt="coupon"
              className="couponImage"
            />
          </header>
        </div>

        <div className="congratslowerBox">
          <p className="promoteTxt">다양한 소식과 할인 정보를 받아보세요!</p>
          <p className="emailTxt">[마이페이지]-[회원정보 관리]에서</p>
          <p className="emailTxt">이메일 수신 여부를 변경할 수 있습니다.</p>
          <Link to="/main">
            <button className="shoppingBtn">쇼핑 계속하기</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Congratulation;
