import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SubStart.scss";

class SubStart extends Component {
  render() {
    return (
      <section className="subStart">
        <h2 className="title">🍪 쿠키 정기구독, 이렇게 시작해보세요! 🍪</h2>
        <ol>
          <li className="subSteplist">
            <div className="steplistImg">
              <img
                alt="정기구독 방법 step 1"
                src="https://user-images.githubusercontent.com/46774456/111411544-1a016600-871e-11eb-91a4-4ef2f03121f0.png"
                className="subStep"
              />
            </div>
            <strong className="stepNum">01</strong>
            <span>
              정기구독 상품 중{" "}
              <strong>
                원하시는
                <br />
                쿠키박스 사이즈
              </strong>
              를 선택해주세요.
            </span>
          </li>
          <li className="subSteplist">
            <div className="steplistImg">
              <img
                alt="정기구독 방법 step 2"
                src="https://user-images.githubusercontent.com/46774456/111411544-1a016600-871e-11eb-91a4-4ef2f03121f0.png"
                className="subStep"
              />
            </div>
            <strong className="stepNum">02</strong>
            <span>
              쿠키를{" "}
              <strong>
                구독하고 싶은
                <br />총 기간
              </strong>
              을 선택해주세요.
            </span>
          </li>
          <li className="subSteplist">
            <div className="steplistImg">
              <img
                alt="정기구독 방법 step 3"
                src="https://user-images.githubusercontent.com/46774456/111411544-1a016600-871e-11eb-91a4-4ef2f03121f0.png"
                className="subStep"
              />
            </div>
            <strong className="stepNum">03</strong>
            <span>
              쿠키를 <strong>받고 싶은 요일</strong>을
              <br />
              선택해주세요.
            </span>
          </li>
          <li className="subSteplist">
            <div className="steplistImg">
              <img
                alt="정기구독 방법 step 4"
                src="https://user-images.githubusercontent.com/46774456/111411544-1a016600-871e-11eb-91a4-4ef2f03121f0.png"
                className="subStep"
              />
            </div>
            <strong className="stepNum">04</strong>
            <span>
              <strong>
                2주에 한번
                <br />
                가장 달콤한 쿠키
              </strong>
              로 찾아갈게요.
            </span>
          </li>
        </ol>
        <div className="subTip">
          <span className="changeDate">
            혹시, 일정을 변경하고 싶으신가요? 마이페이지 혹은 고객센터를 통해
            미리 일정을 변경하실 수 있습니다.
          </span>
        </div>
      </section>
    );
  }
}
export default withRouter(SubStart);
