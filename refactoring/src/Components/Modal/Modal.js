import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";

class Modal extends Component {
  render() {
    return (
      <aside className="modalShow">
        <div className="modalWrap">
          <div className="modalContent">
            <div className="contentBox">
              <p>{`상품을 장바구니에 담았습니다 :-)`}</p>
              <div className="links">
                <button
                  type="button"
                  className="modalBtn"
                  onClick={() => this.props.deleteModal()}
                >
                  계속 쇼핑하기
                </button>

                <Link to="/cart">
                  <button type="button" className="modalBtn cart">
                    장바구니 가기
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Modal;
