import React from "react";
import { SiNotion, SiInstagram, SiGithub } from "react-icons/si";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="footerBox">
          <div className="upperBox">
            <div className="iconBox">
              <a href="https://www.notion.so/haribot/1-KKAKKA-56a79b25481c49cca828e41af869898b">
                <SiNotion className="icons" />
              </a>
              <a href="https://www.instagram.com/wecode_bootcamp/">
                <SiInstagram className="icons" />
              </a>
              <a href="https://github.com/wecode-bootcamp-korea/18-1st-KKAKKA-frontend">
                <SiGithub className="icons" />
              </a>
            </div>

            <div className="btnTxtBox">
              <span className="csTxt">까까 고객센터</span>
              <div className="upperBtnBox">
                <button className="upperBtn">자주 묻는 질문</button>
                <button className="upperBtn"> 1:1 문의하기</button>
              </div>
            </div>
          </div>
          <div className="lowerBox">
            <p className="bottomTxt">
              상호명: 까까 (KKAKKA) | 제작자: 권영균, 남궁선아, 이근화, 이수진,
              이호열
            </p>
            <p className="bottomTxt">주소: 서울시 강남구 테헤란로 427</p>
            <div className="legalInfo">
              <span className="bottomLegalTxt">© 2021 KKAKKA</span>
              <div className="bottomBtnBox">
                <button className="bottomBtn">이용약관</button>
                <button className="bottomBtn">개인정보취급방침</button>
                <button className="bottomBtn">제휴안내</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
