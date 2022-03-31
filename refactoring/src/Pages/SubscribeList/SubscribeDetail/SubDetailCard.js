import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import DetailInfo from "./Components/DetailInfo/DetailInfo";
import DetailOption from "./Components/DetailOption/DetailOption";
import "./SubDetailCard.scss";

class SubDetailCard extends Component {
  render() {
    const {
      id,
      introduction,
      name,
      price,
      description,
      image,
      subscribeData,
    } = this.props;

    return (
      <section className="detailContainer">
        <ul className="categoryNav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/subscription">쿠키 정기구독</Link>
          </li>
          <li>
            <Link to={`./${this.props.match.params.id}`}>{name}</Link>
          </li>
        </ul>
        <div className="detailContents">
          <div className="productThumnail">
            <img
              alt="쿠키 이미지"
              src={image && image.length > 0 && image[0]}
              className="thumnail"
            />
            <div className="detailSlider">
              {[1, 2, 3, 2, 4].map((n, index) => {
                return (
                  <div>
                    <img
                      alt={`쿠키 미니 이미지${index}`}
                      src={image && image.length > 0 && image[n]}
                      className="thumnailMini"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="productDetailRight">
            <DetailInfo
              key={id}
              introduction={introduction}
              name={name}
              price={price}
              description={description}
              image={image}
            />
            <div className="detailInfo">
              <span className="contents">정기구독 전상품</span>
              <p className="contentsHighlight">무료배송!</p>
              <DetailOption
                key={id}
                price={price}
                subscribeData={subscribeData}
                changeDate={this.props.changeDate}
                changeCount={this.props.changeCount}
                chkHasLetter={this.props.chkHasLetter}
                changeSubOption={this.props.changeSubOption}
                goToOrder={this.props.goToOrder}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(SubDetailCard);
