import React, { Component } from "react";
import moment from "moment";
import { config } from "../../../config.js";
import Nav from "../../../Components/Nav/Nav";
import Footer from "../../../Components/Footer/Footer";
import SubDetailCard from "./SubDetailCard";
import "./SubscribeDetail.scss";

class SubscribeDetail extends Component {
  constructor() {
    super();
    this.state = {
      subscribeList: [],
      subscribeData: {
        isLogin: true,
        quantity: 1,
        subscribeOption: "", //monthly_plan
        delivery_date: "",
        hasLetter: true,
        productPrice: "",
        totalPrice: "",
        modal: false,
        basketItem: [],
      },
    };
  }

  // detail에서 order으로 이동시킬 fetch 함수 //
  goToOrder = () => {
    const newDate = this.state.subscribeData.delivery_date;
    fetch(`${config.api}/order/subscription/${this.props.match.params.id}`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.BmykDxMZydx7PPn-H89k04E3wCKCya3c4nwh8zxUqMU",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: 1,
        option: 1,
        monthly_plan: 1,
        delivery_date: moment(newDate).format("YYYY-MM-DD"),
        quantity: this.state.subscribeData.quantity,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .then(this.props.history.push("/order"));
  };
  // .then(res => {
  //   console.log("확인:", res);
  //   if (res.status === 200) {
  //     this.welcomeAlert();
  //     this.props.history.push(
  //       `${config.api}/order/susbscription/${this.props.match.params.id}`
  //     );
  //   }
  //   if (res.status === 401) {
  //     this.alreadyUserAlert();
  //   }
  //   if (res.status === 400) {

  getData = () => {
    // fetch("http://localhost:3000/data/subscribeData.json", {
    fetch(`${config.api}/subscription/${this.props.match.params.id}`, {
      // const token = localStorage.getItem("token");
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.BmykDxMZydx7PPn-H89k04E3wCKCya3c4nwh8zxUqMU",
      },
    }).then(res => console.log(res));
    fetch(`${config.api}/subscription/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          subscribeList: data.result[0],
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

  changeSubOption = e => {
    let updateOption = {
      ...this.state.subscribeData,
      subscribeOption: e.target.value,
    };
    let resetCount = {
      ...this.state.subscribeData,
      quantity: 1,
      subscribeOption: e.target.value,
    };
    this.setState({ subscribeData: updateOption });
    if (e.target.value !== "정기결제") {
      this.setState({ subscribeData: resetCount });
    }
  };

  changeCount = modifier => {
    const { subscribeOption, quantity } = this.state.subscribeData;
    if (subscribeOption !== "정기구독") return;
    const newObj = { ...this.state.subscribeData };
    if (modifier === "add" && quantity < 10) {
      newObj.quantity += 1;
      this.setState({
        subscribeData: newObj,
      });
    } else if (modifier === "minus" && quantity > 1) {
      newObj.quantity -= 1;
      this.setState({
        subscribeData: newObj,
      });
    }
  };

  chkHasLetter = () => {
    let updateLetter = {
      ...this.state.subscribeData,
      hasLetter: !this.state.subscribeData.hasLetter,
    };
    this.setState({
      subscribeData: updateLetter,
    });
  };

  changePrice = () => {
    let updatePrice = {
      ...this.state.subscribeData,
      productPrice:
        this.state.subscribeData.price * this.state.subscribeData.quantity,
    };
    this.setState({
      subscribeData: updatePrice,
    });
  };

  changeDate = (date, event) => {
    let updateDate = {
      ...this.state.subscribeData,
      delivery_date: date,
    };
    this.setState({ subscribeData: updateDate });
  };

  render() {
    const { id, introduction, name, price, description, image } =
      this.state.subscribeList;
    return (
      <>
        <Nav />
        <div>
          {id >= 0 && (
            <SubDetailCard
              key={id}
              id={id}
              introduction={introduction}
              name={name}
              price={price}
              description={description}
              image={image}
              subscribeData={this.state.subscribeData}
              changeDate={this.changeDate}
              changeCount={this.changeCount}
              chkHasLetter={this.chkHasLetter}
              changeSubOption={this.changeSubOption}
              goToOrder={this.goToOrder}
            />
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default SubscribeDetail;
