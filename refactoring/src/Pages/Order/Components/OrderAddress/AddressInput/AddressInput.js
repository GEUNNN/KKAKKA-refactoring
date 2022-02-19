import React, { Component } from "react";
import FooterBtn from "../../FooterBtn/FooterBtn";
import "./AddressInput.scss";

class AddressInput extends Component {
  constructor() {
    super();
    this.state = {
      recipient_phone: "",
      recipient: "",
      postal_code: "",
      address: "",
      address_detail: "",
      sender: "",
      save_address: true,
    };
  }

  chkSaveAddress = () => {
    this.setState({
      save_address: !this.state.save_address,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    fetch("http://local/", {
      method: "POST",
      body: JSON.stringify({
        recipient_phone: this.state.recipient_phone,
        recipient: this.state.recipient,
        postal_code: this.state.postal_code,
        phone_number: this.state.phone,
        address: this.state.address + this.state.address_detail,
        sender: this.state.sender,
      }),
    })
      .then(res => res.json())
      .then(result => {
        // if (response.status === 400) {
        //   alert("다시 한번 확인해주세요");
        // } else {
        alert("주문완료!");
        this.props.history.push("/main");
        window.location.reload();
        // }
      });
  };

  render() {
    return (
      <>
        <div className="addInputContainer">
          <form id="formOrder" name="formOrder" method="post">
            <table>
              <thead>
                <th className="optionTh1"></th>
                <th className="optionTh2"></th>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <span className="title">수령인 이름</span>
                  </th>
                  <td>
                    <input
                      className="contents"
                      id="recipient"
                      type="text"
                      name="recipient"
                      onChange={this.handleChange}
                      autocomplete="off"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="title">수령인 연락처</span>
                  </th>
                  <td>
                    <input
                      className="contents"
                      id="recipient_phone"
                      type="tel"
                      name="recipient_phone"
                      onChange={this.handleChange}
                      autocomplete="off"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="title">우편 번호</span>
                  </th>
                  <td>
                    <input
                      className="contents"
                      id="postal_code"
                      type="number"
                      name="postal_code"
                      onChange={this.handleChange}
                      autocomplete="off"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="title">주소</span>
                  </th>
                  <td>
                    <input
                      className="contents"
                      id="address"
                      type="text"
                      name="address"
                      onChange={this.handleChange}
                      autocomplete="off"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="title">상세주소</span>
                  </th>
                  <td>
                    <input
                      className="contents"
                      id="address_detail"
                      type="text"
                      name="address_detail"
                      onChange={this.handleChange}
                      autocomplete="off"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="title">발신인</span>
                  </th>
                  <td>
                    <input
                      className="contents"
                      id="name"
                      type="text"
                      name="sender"
                      onChange={this.handleChange}
                      autocomplete="off"
                    />
                  </td>
                </tr>
                <tr className="optionRow3">
                  <th>
                    <span className="title">배송지 저장</span>
                  </th>
                  <td>
                    <form className="saveCheckboxes">
                      <div className="saveCheckbox">
                        <input
                          className="contents"
                          id="save"
                          type="radio"
                          name="save"
                          value={this.state.save_address}
                          checked={this.state.save_address && true}
                          onClick={this.chkSaveAddress}
                          readOnly
                        />
                        <label htmlFor="save">저장하기</label>
                      </div>
                      <div className="saveCheckbox">
                        <input
                          className="contents"
                          id="notSave"
                          type="radio"
                          name="notSave"
                          value="notSave"
                          checked={!this.state.save_address && true}
                          onClick={this.chkSaveAddress}
                        />
                        <label htmlFor="notSave">저장안함</label>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="nobodyInfo">
              <span>익명으로 보내기를 선택할 경우, 주의할 것이 있어요.</span>
              <p>
                보내는 분의 성함이 기재되지 않아 받는 분이 수령을 거부하기도
                해요.
              </p>
              <p>
                이 경우 환불이나 교환이 어려우니 꼭 확인하신 후 체크
                부탁드릴게요.
              </p>
              <span>토요일 수령 선택 시 주의사항</span>
              <p>토요일 수령을 선택하실 경우, 회사 주소는 배송이 어려워요.</p>
              <p>
                자택이나 수령인이 직접 받으실 수 있는 주소지로 입력
                부탁드릴게요.
              </p>
            </div>
          </form>
        </div>
        <FooterBtn onClick={this.handleSubmit} />
      </>
    );
  }
}
export default AddressInput;
