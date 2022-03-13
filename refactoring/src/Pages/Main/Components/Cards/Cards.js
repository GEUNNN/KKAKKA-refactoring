import React, { Component } from "react";
import "./Cards.scss";

export class Cards extends Component {
  render() {
    console.log("cards >>", this.props.description);
    const { description, name, price } = this.props;
    return (
      <div className="cards">
        <img
          src={this.props.subscribeImg}
          className="subscribeImg"
          alt="product"
        />
        <p className="subscribeIntro">{description}</p>
        <p className="subscribeName">{name}</p>
        <p className="subscribePrice">{`${price}원`}</p>
        <span className="freeShipping">무료배송</span>
      </div>
    );
  }
}

export default Cards;
