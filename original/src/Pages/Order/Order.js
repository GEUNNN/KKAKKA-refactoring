import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import OrderLetter from "./Components/OrderLetter/OrderLetter";
import OrderAddress from "./Components/OrderAddress/OrderAddress";
import OrderPay from "./Components/OrderPay/OrderPay";

import "./Order.scss";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      currentId: 1,
      deliveryData: {
        recipient_phone: "",
        recipient: "",
        postal_code: "",
        address: "",
        address_detail: "",
        save_address: true,
        sender: "",
      },
    };
  }

  inputChange = e => {
    this.setState({
      deliveryData: { [e.target.name]: e.target.value },
    });
  };

  clickHandler = id => {
    this.setState({ currentId: id });
  };

  render() {
    return (
      <>
        <Nav />
        <section className="orderContainer">
          <nav className="orderToggle">
            <ul className="toggleBtns">
              <li
                className={`toggleBtn ${
                  this.state.currentId === 1 && "selected"
                }`}
                onClick={() => this.clickHandler(1)}
              >
                <div className="toggleContents">
                  <h2>1</h2>
                  <h3>편지 추가</h3>
                </div>
              </li>
              <li
                className={
                  this.state.currentId === 2
                    ? "toggleBtn selected"
                    : "toggleBtn"
                }
                onClick={() => this.clickHandler(2)}
              >
                <div className="toggleContents">
                  <h2>2</h2>
                  <h3>주소 입력</h3>
                </div>
              </li>
              <li
                className={
                  this.state.currentId === 3
                    ? "toggleBtn selected"
                    : "toggleBtn"
                }
                onClick={() => this.clickHandler(3)}
              >
                <div className="toggleContents">
                  <h2>3</h2>
                  <h3>결제</h3>
                </div>
              </li>
            </ul>
          </nav>
          <div className="contentsBox">
            {this.state.currentId === 1 && <OrderLetter />}
            {this.state.currentId === 2 && (
              <OrderAddress
                deliveryData={this.state.deliveryData}
                inputChange={this.inputChange}
              />
            )}
            {this.state.currentId === 3 && <OrderPay />}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default Order;
