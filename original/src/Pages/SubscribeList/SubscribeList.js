import React, { Component } from "react";
import { config } from "../../config.js";
import Nav from "../../Components/Nav/Nav";
import SubNav from "../../Components/SubNav/SubNav";
import Footer from "../../Components/Footer/Footer";
import SubCard from "./SubCard/SubCard";
import SubStart from "./SubStart/SubStart";
import "./SubscribeList.scss";
import "../../Components/Nav/Nav.scss";
import "../../Components/SubNav/SubNav.scss";
import "../../Components/Footer/Footer.scss";

class SubscribeList extends Component {
  constructor() {
    super();
    this.state = {
      subscribeList: [],
      currentId: 1,
      subNav: {
        title: "๐ช ๊น๊น ์ฟ ํค ์ ๊ธฐ๊ตฌ๋ ๐ช",
        desc: "2์ฃผ์ ํ ๋ฒ, ๋งค๋ฒ ์๋ก์ด ์ฟ ํค๋ก ๋น์ ์ ์ผ์์ ํ๋ณต์ผ๋ก ์ฑ์ธ๊ฒ์.",
      },
    };
  }

  clickHandler = id => {
    this.setState({ currentId: id });
  };

  componentDidMount() {
    // fetch("http://localhost:3000/data/subscribeData.json")
    fetch(`${config.api}/subscription`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          subscribeList: data.result,
        });
      });
  }

  render() {
    const { subscribeList, currentId, subNav } = this.state;
    return (
      <>
        <Nav />
        <SubNav title={subNav.title} desc={subNav.desc} />
        <section className="sublistContainer">
          <nav className="subToggle">
            <ul className="toggleBtns">
              <li
                className={`toggleBtn ${currentId === 1 && "selected"}`}
                onClick={() => this.clickHandler(1)}
              >
                ์ ๊ธฐ๊ตฌ๋ ์ํ
              </li>
              <li
                className={`toggleBtn ${currentId === 2 && "selected"}`}
                onClick={() => this.clickHandler(2)}
              >
                ์ด์ฉ ๋ฐฉ๋ฒ
              </li>
            </ul>
          </nav>
          <div className="contentsBox">
            {currentId === 2 && <SubStart />}
            {currentId === 1 &&
              subscribeList.map(sub => {
                return (
                  <SubCard
                    key={sub.id}
                    id={sub.id}
                    introduction={sub.introduction}
                    name={sub.name}
                    price={sub.price}
                    description={sub.description}
                    image={sub.image}
                  />
                );
              })}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default SubscribeList;
