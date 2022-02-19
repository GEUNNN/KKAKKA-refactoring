import React from "react";
import { withRouter } from "react-router-dom";
import "./ListDatas.scss";

class ListDatas extends React.Component {
  goToDetail = () => {
    this.props.history.push(`/product/${this.props.id}`);
  };

  render() {
    const {
      detail,
      discountRate,
      discountedPrice,
      image,
      name,
      originPrice,
      size,
    } = this.props;
    return (
      <div className="listDatas">
        <p className="image">
          <img alt="img" src={image} onClick={this.goToDetail} />
        </p>
        <p className="detail">{detail}</p>
        <p className="name" onClick={this.goToDetail}>
          {name}
        </p>

        <div className="detailThird">
          {discountRate > 0.0 && (
            <span className="discountRate">{discountRate * 100}%</span>
          )}
          {discountedPrice > 0 && (
            <span className="originPrice1">{originPrice}원</span>
          )}
          {discountRate === 0.0 && (
            <span className="originPrice">{originPrice}원</span>
          )}
          {discountRate > 0.0 && (
            <span className="originPrice">{discountedPrice}원</span>
          )}
        </div>

        <div className="detailFourth">
          <span className="size">{size}</span>
          <span className="freeshipping">무료배송</span>
        </div>
      </div>
    );
  }
}

export default withRouter(ListDatas);
