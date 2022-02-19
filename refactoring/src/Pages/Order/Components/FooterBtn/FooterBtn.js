import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./FooterBtn.scss";

class FooterBtn extends Component {
  goToPrevious = () => {
    this.props.history.goBack();
  };

  goToNext = () => {
    this.props.history.go(1);
  };

  render() {
    return (
      <div className="letterFooter">
        <div className="letterBtns">
          <button className="letterBtn previous" onClick={this.goToPrevious}>
            이전 화면으로
          </button>
          <button className="letterBtn next" onClick={this.goToNext}>
            다음 단계로
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(FooterBtn);
