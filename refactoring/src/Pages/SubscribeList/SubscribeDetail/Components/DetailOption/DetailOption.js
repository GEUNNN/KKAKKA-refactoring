import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BsX } from "react-icons/bs";
import DateInput from "../../../../../Components/DateInput/DateInput";
import Modal from "../../../../../Components/Modal/Modal";
import "./DetailOption.scss";

class DetailOption extends Component {
  constructor() {
    super();
    this.state = {
      // api 연결 이후 fetch 로그인 상태 인증으로 로직 변경
      isLogin: true,
      totalPrice: "",
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
    const {
      subscribeOption,
      quantity,
      delivery_date,
      hasLetter,
    } = this.props.subscribeData;
    const {
      changeCount,
      chkHasLetter,
      changeDate,
      price,
      changeSubOption,
    } = this.props;
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
                    <span className="contents">구독옵션</span>
                  </th>
                  <td className="optionBox">
                    <select value={subscribeOption} onChange={changeSubOption}>
                      <label htmlFor="option">구독 옵션</label>
                      <option className="selected" value="">
                        구독기간을 선택해주세요
                      </option>
                      <option className="option" value="정기구독">
                        정기결제 (2주마다 자동결제)
                      </option>
                      <option className="option" value="무료체험">
                        1회 무료 체험
                      </option>
                    </select>

                    {subscribeOption !== "" && (
                      <DateInput
                        changeDate={changeDate}
                        startDate={delivery_date}
                      />
                    )}
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
          {(() => {
            if (subscribeOption === "") {
              return (
                <>
                  <div>
                    <span className="contents">상품 가격</span>
                    <p className="subContents">구독 기간을 선택해주세요</p>
                  </div>
                  <span className="price">0</span>
                </>
              );
            } else if (subscribeOption === "정기구독") {
              return (
                <>
                  <div>
                    <span className="contents">상품 가격</span>
                    <p className="subContents">정기구독(2주마다 자동결제)</p>
                  </div>
                  <span className="price">
                    {(Number(price) * quantity).toLocaleString()}
                  </span>
                </>
              );
            } else if (subscribeOption === "무료체험") {
              return (
                <>
                  <div>
                    <span className="contents">상품 가격</span>
                    <p className="subContents">1회 무료 체험</p>
                  </div>
                  <span className="price">0</span>
                </>
              );
            }
          })()}
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
              {(
                Number(price) * quantity +
                (hasLetter && Number(0))
              ).toLocaleString()}
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
            onClick={() => this.props.goToOrder()}
          >
            바로 구독 신청
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailOption);
