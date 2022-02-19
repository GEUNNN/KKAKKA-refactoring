import React, { Component } from "react";
import ListDatas from "../FlowerList/ListDatas";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import SubNav from "../../Components/SubNav/SubNav";
import "../FlowerList/FlowerList.scss";
import "./Event.scss";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      listDatas: [],
      subNav: {
        title: "🍪 까까 쿠키쿠키 팩토리 🍪",
        desc: "누구나 쿠키부자가 될 수 있다! MAKE YOUR COOKIE💎",
      },
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/FlowerList.json")
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            listDatas: data.result,
          },
          () => {
            console.log(data);
          }
        );
      });
  };

  startBrandnew = () => {
    const { listDatas } = this.state;

    this.setState({
      listDatas: listDatas.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      }),
    });
  };

  startHighPrice = () => {
    const { listDatas } = this.state;
    this.setState({
      listDatas: listDatas.sort((a, b) => a.orign_price - b.orign_price),
    });
  };

  startLowPrice = () => {
    const { listDatas } = this.state;
    this.setState({
      listDatas: listDatas.sort((a, b) => b.orign_price - a.orign_price),
    });
  };

  render() {
    const { listDatas, subNav } = this.state;
    return (
      <div className="eventBox">
        <Nav />
        <SubNav title={subNav.title} desc={subNav.desc} />
        <div className="flowerListMain">
          <div className="sortButton">
            <button class="startBrandnew" onClick={this.startBrandnew}>
              쿠키 공장 2호 가동
            </button>
            <button class="startLowPrice" onClick={this.startLowPrice}>
              쿠키 공장 1호 가동
            </button>
          </div>

          <div className="list">
            {listDatas.map(list => {
              return (
                <ListDatas
                  key={list.id}
                  createdAt={list.created_at}
                  detail={list.detail}
                  discountRate={list.discount_rate}
                  discountedPrice={list.discounted_price}
                  id={list.id}
                  image={list.image}
                  name={list.name}
                  originPrice={list.orign_price}
                  size={list.size}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Event;
