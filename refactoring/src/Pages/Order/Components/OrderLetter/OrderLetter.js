import React, { Component } from "react";
import FooterBtn from "../FooterBtn/FooterBtn";
import "./OrderLetter.scss";

class OrderLetter extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      letterText: "",
    };
  }

  changeInput = e => {
    this.setState({ letterText: e.target.value });
  };

  render() {
    return (
      <div className="letterContainer">
        <h4>메세지카드</h4>
        <div className="letterBox">
          <div className="letterHeader">
            <input type="text" className="letterTag" value="폴인로즈 에디션" />
            <div className="noTextBox">
              <input type="checkbox" className="noText" />
              <p>메세지 없이 카드만 받을게요.</p>
            </div>
          </div>
          <div className="letterBody">
            <div className="inputLetter">
              <textarea
                className="text"
                placeholder="여기에 입력하세요 :-)"
                onChange={this.changeInput}
                value={this.state.letterText}
              />
              <div className="textInfo">
                <span className="textLimit">0/120</span>
                <p>*이모티콘은 편지 내용에 포함되지 않습니다.</p>
                <p>*편지 내용을 이곳에 직접 입력해주세요.</p>
                <p>*붙여넣기 사용 시 편지가 입력되지 않습니다.</p>
              </div>
            </div>
            <div className="previewLetter">
              <textarea className="textview" value={this.state.letterText} />
              <div className="textviewInfo">
                <p>*실제 편지지 모습입니다. 최대 8줄까지만 인쇄됩니다.</p>
              </div>
            </div>
          </div>
        </div>
        <FooterBtn />
      </div>
    );
  }
}
export default OrderLetter;
