import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductContext } from "./store/ProductContext";
ReactDOM.render(
  <React.StrictMode>
    <ProductContext>
      <App />
    </ProductContext>
  </React.StrictMode>,
  document.getElementById("root")
);
