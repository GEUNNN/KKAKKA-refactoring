import React, { Component } from "react";
import AddressInput from "./AddressInput/AddressInput";
import "./OrderAddress.scss";

class OrderAddress extends Component {
  constructor() {
    super();
    this.state = {
      deliveryId: 1,
    };
  }

  clickHandler = id => {
    this.setState({ deliveryId: id });
  };

  render() {
    return (
      <div className="addressContainer">
        <h4>거의 다 왔어요, 이제 주소만 넣으면 돼요😎 </h4>
        <div className="addressBox">
          <nav className="addressToggle">
            <ul className="addressBtns">
              <li
                className={`toggleBtn ${
                  this.state.deliveryId === 1 && "selected"
                }`}
                onClick={() => this.clickHandler(1)}
              >
                <h3>배송지 입력</h3>
              </li>
              <li
                className={`toggleBtn ${
                  this.state.deliveryId === 2 && "selected"
                }`}
                onClick={() => this.clickHandler(2)}
              >
                <h3>배송지 목록</h3>
              </li>
              <li
                className={`toggleBtn ${
                  this.state.deliveryId === 3 && "selected"
                }`}
                onClick={() => this.clickHandler(3)}
              >
                <h3>받는 분이 입력</h3>
              </li>
            </ul>
          </nav>

          {this.state.deliveryId === 1 && (
            <AddressInput deliveryData={this.props.deliveryData} />
          )}
          {this.state.deliveryId === 2}
          {this.state.deliveryId === 3}
        </div>
      </div>
    );
  }
}
export default OrderAddress;
