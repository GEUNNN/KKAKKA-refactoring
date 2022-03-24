import { useState, useEffect } from "react";
import axios from "axios";
import { mockCookieItemsAPI, mockCookieSubscribeAPI } from "../../config";
import Nav from "../../Components/Nav/Nav";
import { Footer } from "../../Components/Footer/Footer";
import { Cards } from "./Components/Cards/Cards";
import { DataList } from "./Components/DataList/DataList";
import "../../styles/common.scss";
import "./Main.scss";

export interface CookieResData {
  product_list: CookieItem[];
}

export interface CookieItem {
  id: number;
  name: string;
  introduction: string;
  image: string;
  orign_price: number;
  discount_rate: number;
  discounted_price: number;
}

export interface SubscribeItem {
  id: number;
  name: string;
  introduction: string;
  image: string;
  price: number;
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
          <div className="subscribeContainer">
            {cookieSubscribe?.map(subscribeItem => {
              return (
                <Cards
                  key={subscribeItem?.id}
                  name={subscribeItem?.name}
                  description={subscribeItem?.introduction}
                  image={subscribeItem?.image}
                  price={subscribeItem?.price}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="CookieItemsContainer">
        {cookieData.map(cookieDataItem => {
          return (
            <DataList
              key={cookieDataItem?.id}
              name={cookieDataItem?.name}
              description={cookieDataItem?.introduction}
              image={cookieDataItem?.image}
              price={cookieDataItem?.orign_price}
              discountRate={cookieDataItem?.discount_rate}
              discountedPrice={cookieDataItem?.discounted_price}
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
