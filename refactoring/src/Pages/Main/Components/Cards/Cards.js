import React, { Component } from "react";
import "./Cards.scss";

export class Cards extends Component {
  render() {
    const { subscribeIntro, subscribeName, subscribePrice } = this.props;
    return (
      <div className="cards">
        <img
          src={this.props.subscribeImg}
          className="subscribeImg"
          alt="product"
        />
        <p className="subscribeIntro">{subscribeIntro}</p>
        <p className="subscribeName">{subscribeName}</p>
        <p className="subscribePrice">{`${subscribePrice}원`}</p>
        <span className="freeShipping">무료배송</span>
      </div>
    );
  }
}

export default Cards;
