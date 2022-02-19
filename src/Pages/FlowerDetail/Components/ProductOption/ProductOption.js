import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BsX } from "react-icons/bs";
import DateInput from "../../../../Components/DateInput/DateInput";
import Modal from "../../../../Components/Modal/Modal";
import "./ProductOption.scss";

class ProductOption extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
      modal: false,
      basketItem: [],
    };
  }

  handleModal = e => {
    if (this.state.isLogin) {
      this.setState({ modal: !this.state.modal, basketItem: e });
    } else {
      this.props.history.push("/login");
    }
  };

  deleteModal = e => {
    if (this.state.modal) {
      this.setState({ modal: !this.state.modal });
    }
  };

  goToOrder = () => {
    const { isLogin } = this.state;
    this.props.history.push(`/${isLogin ? "order" : "login"}`);
  };

  render() {
    const { discounted_price, chkHasLetter, changeDate, changeCount } =
      this.props;
    const { quantity, delivery_date, hasLetter } = this.props.productData;

    return (
      <div>
        {this.state.modal && (
          <Modal modal={this.state.modal} deleteModal={this.deleteModal} />
        )}
        <div className="detailOption">
          <div className="subscribeOption">
            <table>
              <thead>
                <th className="optionTh1"></th>
                <th></th>
              </thead>
              <tbody>
                <tr className="optionRow1">
                  <th>
                    <span className="contents">수령일</span>
                  </th>
                  <td>
                    <DateInput
                      changeDate={changeDate}
                      startDate={delivery_date}
                    />
                  </td>
                </tr>
                <tr className="optionRow2">
                  <th>
                    <span className="contents">수량</span>
                  </th>
                  <td>
                    <div className="detailAmount">
                      <button
                        type="button"
                        className="btnAmount"
                        onClick={() => changeCount("minus")}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        className="btnAmount"
                        onClick={() => changeCount("add")}
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="optionRow3">
                  <th>
                    <span className="contents">편지 추가</span>
                  </th>
                  <td>
                    <form className="letterCheckboxes">
                      <div className="letterCheckbox">
                        <input
                          className="contents"
                          id="letter"
                          type="radio"
                          name="letter"
                          value="letter"
                          checked={hasLetter ? true : false}
                          onClick={chkHasLetter}
                          readOnly
                        />

                        <label htmlFor="letter">추가할게요(FREE)</label>
                      </div>
                      <div className="letterCheckbox">
                        <input
                          className="contents"
                          id="letterNo"
                          type="radio"
                          name="letter"
                          value="noLetter"
                          checked={!hasLetter}
                          onClick={chkHasLetter}
                        />
                        <label htmlFor="letterNo">추가하지 않을게요</label>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detailPrice">
          <div>
            <span className="contents">상품 가격</span>
            <p className="subContents">구독 기간을 선택해주세요</p>
          </div>
          <span className="price">
            {(Number(discounted_price) * quantity).toLocaleString()}
          </span>
        </div>
        {hasLetter && (
          <div className="letterPrice">
            <div>
              <span className="contents">편지 추가</span>
            </div>
            <div className="letterBox">
              <span className="price">{Number(0).toLocaleString()}</span>
              <BsX
                value={{ className: "navIcon" }}
                size="2em"
                verticalalign="middle"
                className="deleteBtn"
                onClick={chkHasLetter}
              />
            </div>
          </div>
        )}
        <div className="totalPrice">
          <p className="shippingFree">무료배송</p>
          <div>
            <p className="subContents">총 주문금액</p>
            <h2 className="title price">
              {(Number(discounted_price) * quantity).toLocaleString()}
            </h2>
          </div>
        </div>
        <div className="detailButtons">
          <button
            type="button"
            className="detailBtn cart"
            onClick={() => this.handleModal()}
          >
            장바구니
          </button>
          <button
            type="button"
            className="detailBtn order"
            onClick={this.goToOrder}
          >
            바로 구독 신청
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductOption);
