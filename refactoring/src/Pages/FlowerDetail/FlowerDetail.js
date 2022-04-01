import React, { Component } from "react";
import { Link } from "react-router-dom";
import { config } from "../../config.js";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ProductOption from "./Components/ProductOption/ProductOption";
import { Footer } from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import "./FlowerDetail.scss";

class FlowerDetail extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      productData: {
        quantity: 1,
        delivery_date: "",
        hasLetter: true,
        price: 0,
        productPrice: "",
        totalPrice: "",
        basketItem: [],
      },
    };
  }

  getData = () => {
    // fetch("http://localhost:3000/data/productData.json")
    fetch(`${config.api}/product/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.result[0],
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getData();
    }
  }

  changeCount = modifier => {
    const { quantity } = this.state.productData;
    const newObj = { ...this.state.productData };
    if (modifier === "add" && quantity < 10) {
      newObj.quantity += 1;
      this.setState({
        productData: newObj,
      });
    } else if (modifier === "minus" && quantity > 1) {
      newObj.quantity -= 1;
      this.setState({
        productData: newObj,
      });
    }
  };

  chkHasLetter = () => {
    let updateLetter = {
      ...this.state.productData,
      hasLetter: !this.state.productData.hasLetter,
    };
    this.setState({
      productData: updateLetter,
    });
  };

  changePrice = () => {
    let updatePrice = {
      ...this.state.productData,
      productPrice:
        this.state.productData.price * this.state.productData.quantity,
    };
    this.setState({
      productData: updatePrice,
    });
  };

  changeDate = date => {
    let updateDate = {
      ...this.state.productData,
      delivery_date: date,
    };
    this.setState({ productData: updateDate });
  };

  render() {
    const {
      id,
      detail,
      name,
      size,
      orign_price,
      discount_rate,
      discounted_price,
      images,
    } = this.state.productList;
    const { productData } = this.state;
    return (
      <>
        <Nav />
        <section className="detailContainer">
          <ul className="categoryNav">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/subscription">쿠키박스</Link>
            </li>
            <li>
              <Link to={`./${this.props.match.params.id}`}>{name}</Link>
            </li>
          </ul>
          <div className="detailContents">
            <div className="productThumnail">
              <img
                alt="쿠키 이미지"
                src={images && images.length > 0 && images[0]}
                className="thumnail"
              />
              <div className="detailSlider">
                {[1, 2, 3, 2, 4].map((n, index) => {
                  return (
                    <div>
                      <img
                        alt={`쿠키 미니 이미지${index}`}
                        src={images && images.length > 0 && images[n]}
                        className="thumnailMini"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="productDetailRight">
              <ProductInfo
                key={id}
                detail={detail}
                name={name}
                size={size}
                origin_price={orign_price}
                discount_rate={discount_rate}
                discounted_price={discounted_price}
                image={images}
              />

              <div className="detailInfo">
                <span className="contents"> 3만원 이상 구매 시</span>
                <p className="contentsHighlight">무료배송!</p>
                <ProductOption
                  key={id}
                  discounted_price={discounted_price}
                  productData={productData}
                  changeDate={this.changeDate}
                  changeCount={this.changeCount}
                  chkHasLetter={this.chkHasLetter}
                  changePrice={this.changePrice}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default FlowerDetail;
