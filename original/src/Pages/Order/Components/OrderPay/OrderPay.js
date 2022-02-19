import React, { Component } from "react";
import OrderProduct from "./OrderProduct/OrderProduct";
import "./OrderPay.scss";

class OrderPay extends Component {
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
      <div className="addressContainer">
        <h4>마지막으로 다시 한 번 주문내역을 확인해보세요.🎁 </h4>
        <div className="addressBox">
          <OrderProduct />
        </div>
      </div>
    );
  }
}
export default OrderPay;
