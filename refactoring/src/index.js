import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Routes } from "./Routes.tsx";

import "./styles/common.scss";
import "./styles/reset.scss";

ReactDOM.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
  document.getElementById("root")
);
