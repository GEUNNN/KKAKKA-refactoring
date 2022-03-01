import { useState, useEffect } from "react";
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Cards from "./Components/Cards/Cards";
import DataList from "./Components/DataList/DataList";
import { mainSubscribeAPI, productMainAPI } from "../../config";
// import { mockCookieDataAPI, mockCookieSubscribeAPI } from "../../config";
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
  orign_price: string;
  discount_rate: number;
  discounted_price: string;
}

export function Main(): React.ReactElement {
  const [cookieSubscribe, setCookieSubscribe] = useState<string[]>([]);
  const [cookieData, setCookieData] = useState<string[]>([]);

  useEffect(() => {
    const data = axios.get("http://localhost:3000/data/cookieData.json");
    data.then(res => console.log("response >>", res.data));
  }, []);

  console.log(cookieData);

  return (
    <main className="main">
      <div className="navContainer">
        <Nav />
        <div className="subNav">
          <img
            alt="main"
            src="https://kukka-2-media-123.s3.amazonaws.com/media/ckeditor_uploads/2021/02/26/pc_001.png"
            className="subNavImg"
          />
        </div>
      </div>
    </main>
  );
}

// class Mainn extends Component {
//   //mainAPI는 수정 되어서 구현할 떄는 mockdata 변수로 다시 할당
//   // 백엔드와 통신은 완료
//   componentDidMount = () => {
//     fetch(productMainAPI)
//       .then(response => response.json())
//       .then(result => {
//         this.setState({
//           cookieData: result.product_list,
//         });
//       });
//     fetch(mainSubscribeAPI)
//       .then(response => response.json())
//       .then(({ result }) => {
//         this.setState({
//           cookieSubscribe: result,
//         });
//       });
//   };

//   render() {
//     // const { cookieSubscribe, cookieData } = this.state;
//     return (
//       <div className="main">
//         <div className="navContainer">
//           <Nav />
//           <div className="subNav">
//             <img
//               alt="main"
//               src="https://kukka-2-media-123.s3.amazonaws.com/media/ckeditor_uploads/2021/02/26/pc_001.png"
//               className="subNavImg"
//             />
//           </div>
//         </div>
//         <div className="subscribeList">
//           <div className="cookieSubscribeList">
//             <h2 className="subscribeTxt">
//               2주에 한번, 나를 위한 작은 행복 까까{" "}
//               <span className="subscribeBold">쿠키 정기구독</span>
//             </h2>
//             <div className="subscribeItemBox">
//               {cookieSubscribe?.map(subscribeList => {
//                 return (
//                   <Cards
//                     key={subscribeList.id}
//                     subscribeName={subscribeList.name}
//                     subscribeIntro={subscribeList.introduction}
//                     subscribeImg={subscribeList.image}
//                     subscribePrice={subscribeList.price}
//                   />
//                 );
//               })}
//             </div>
//           </div>

//           <div className="cookieListBox">
//             <div className="cookieList">
//               <div className="cookieListTxt">
//                 <h2 className="cookieTxt">
//                   과자가 필요한 순간,{" "}
//                   <span className="cookieBold">쿠키쿠키 랜덤박스</span>
//                 </h2>
//                 <Link to="/product">
//                   <button className="moreBtn">더보기</button>
//                 </Link>
//               </div>
//               <div className="cookieDataItems">
//                 {cookieData.map(cookieDataList => {
//                   return (
//                     <DataList
//                       key={cookieDataList.id}
//                       cookieName={cookieDataList.name}
//                       cookieIntro={cookieDataList.introduction}
//                       cookieImg={cookieDataList.image}
//                       cookiePrice={cookieDataList.orign_price}
//                       cookieDiscountRate={cookieDataList.discount_rate}
//                       cookieDiscountPrice={cookieDataList.discounted_price}
//                     />
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }
// export default Main;
