import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "./Pages/Main/Main";
import Login from "./Pages/Login/Login.js";
import Cart from "./Pages/Cart/Cart.js";
import FlowerClassDetail from "./Pages/FlowerClassDetail/FlowerClassDetail.js";
import FlowerClassList from "./Pages/FlowerClassList/FlowerClassList.js";
import FlowerDetail from "./Pages/FlowerDetail/FlowerDetail.js";
import FlowerList from "./Pages/FlowerList/FlowerList.js";
import Mypage from "./Pages/Mypage/Mypage.js";
import Order from "./Pages/Order/Order.js";
import Event from "./Pages/Event/Event.js";
import OrderList from "./Pages/OrderList/OrderList.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import SubscribeDetail from "./Pages/SubscribeList/SubscribeDetail/SubscribeDetail.js";
import SubscribeList from "./Pages/SubscribeList/SubscribeList.js";
import Congratulation from "./Pages/SignUp/Congratulation.js";

export function Routes(): React.ReactElement {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/flower-class-detail" component={FlowerClassDetail} />
      <Route exact path="/flower-class-list" component={FlowerClassList} />
      <Route exact path="/product/:id" component={FlowerDetail} />
      <Route exact path="/product" component={FlowerList} />
      <Route exact path="/event" component={Event} />
      <Route exact path="/mypage" component={Mypage} />
      <Route exact path="/order/subscription/:id" component={Order} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/order-list" component={OrderList} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/subscription/:id" component={SubscribeDetail} />
      <Route exact path="/subscription" component={SubscribeList} />
      <Route exact path="/signup-congratulation" component={Congratulation} />
    </Router>
  );
}
