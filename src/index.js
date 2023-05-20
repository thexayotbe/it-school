import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="wrapper">
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </div>
);
