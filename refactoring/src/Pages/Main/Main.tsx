import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

import DataList from "./Components/DataList/DataList";
import { mockCookieItemsAPI, mockCookieSubscribeAPI } from "../../config";
import "../../styles/common.scss";
import "./Main.scss";
import { Cards } from "./Components/Cards/Cards";

export interface CookieResData {
  product_list: CookieItem[];
}

export interface CookieItem {
  id: number;
  name: string;
  introduction: string;
  image: string;
  orign_price: string;
  discount_rate: number;
  discounted_price: string;
}

export interface SubscribeItem {
  id: number;
  name: string;
  introduction: string;
  image: string;
  price: string;
}

export function Main(): JSX.Element {
  const [cookieSubscribe, setCookieSubscribe] = useState<SubscribeItem[]>([]);
  const [cookieData, setCookieData] = useState<CookieItem[]>([]);

  useEffect(() => {
    const data = axios.get(mockCookieSubscribeAPI);
    data.then(res => setCookieSubscribe(res?.data?.result));
  }, []);

  useEffect(() => {
    const data = axios.get(mockCookieItemsAPI);
    data.then(res => setCookieData(res?.data?.product_list));
  }, []);

  return (
    <main className="main">
      <div className="navContainer">
        <Nav />
        <div className="mainImg">
          <img
            alt="main"
            src="https://kukka-2-media-123.s3.amazonaws.com/media/ckeditor_uploads/2021/02/26/pc_001.png"
            className="mainImg"
          />
        </div>
      </div>
      <div className="subscribeList">
        <div className="cookieSubscribeList">
          <h2 className="subscribeTxt">
            2주에 한번, 나를 위한 작은 행복 까까
            <span className="subscribeBold">쿠키 정기구독</span>
          </h2>
          <div className="subscribeItemBox">
            {cookieSubscribe?.map(subscribeItem => {
              return (
                <Cards
                  key={subscribeItem.id}
                  name={subscribeItem.name}
                  description={subscribeItem.introduction}
                  image={subscribeItem.image}
                  price={subscribeItem.price}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="CookieItemsContainer">
        {cookieData.map(cookieDataList => {
          return (
            <DataList
              key={cookieDataList.id}
              name={cookieDataList.name}
              description={cookieDataList.introduction}
              image={cookieDataList.image}
              price={cookieDataList.orign_price}
              discountRate={cookieDataList.discount_rate}
              discountPrice={cookieDataList.discounted_price}
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
