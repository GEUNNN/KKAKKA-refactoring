import React, { Component } from "react";
import "./ProductInfo.scss";

class ProductInfo extends Component {
  render() {
    const {
      detail,
      name,
      size,
      origin_price,
      discount_rate,
      discounted_price,
    } = this.props;
    return (
      <div className="detailTitle">
        <span className="subTitle">{detail}</span>
        <div className="titleBox">
          <h2 className="title strong">{name}</h2>
          <div className="sizeBox">
            <span className="detailSize">{size}</span>
          </div>
        </div>
        {discount_rate === 0.0 ? (
          <h2 className="title price">
            {Number(origin_price).toLocaleString()}
          </h2>
        ) : (
          <div className="detailDiscount">
            <span className="discountPer">{discount_rate * 100}</span>
            <span className="oldPrice subTitle">
              {Number(origin_price).toLocaleString()}
            </span>
            <h2 className="title price">
              {Number(discounted_price).toLocaleString()}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default ProductInfo;
