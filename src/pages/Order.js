import React from "react";
import { GrDeliver, GrHome } from "react-icons/gr";
import "../styles/Order.css";
import Navigationbar from "../components/Navigationbar";
const Order = () => {
  return (
    <div className="order-container">
      <span className="order-header-text">Thanks for Your Order</span>
      <div className="grid-col">
        <p className="order-paragraph-1">
          Your order number is <span className="order-number">54353734344</span>{" "}
        </p>
        <p className="order-paragraph-2"> You ordered </p>
      </div>
      <div className="bouncing-car">
        <GrDeliver className="drive-icon"></GrDeliver>
      </div>
      <span className="road"></span>
      <GrHome className="home-icon"></GrHome>
      <Navigationbar></Navigationbar>
    </div>
  );
};

export default Order;
