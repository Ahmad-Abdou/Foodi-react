import React, { useState } from "react";
import "../styles/Sidebar.css";
import { GrDeliver } from "react-icons/gr";
import SingleProduct from "./SingleProduct";

const Sidebar = () => {
  const [delivery, setDelivery] = useState(false);
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        {delivery === true ? (
          <div>
            <GrDeliver className="delivery-icon-on"></GrDeliver>
            <h3 className="delivery-text">Delivery</h3>
          </div>
        ) : (
          <div>
            <GrDeliver className="delivery-icon"></GrDeliver>
            <h3 className="delivery-text">Pickup</h3>
          </div>
        )}

        <input
          onClick={() => setDelivery(!delivery)}
          type="checkbox"
          id="switch"
        />
        <label className="delivery-label" for="switch">
          Delivery
        </label>
      </div>
      <div className="sidebar-items">
        <h3 className="sidebar-items-header">Your Order </h3>
        <h5 className="sidebar-items-name">My Item</h5>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
      </div>

      <div className="sidebar-footer">
        <a href="/cart">
          <button className="btn checkout-btn">Checkout</button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
