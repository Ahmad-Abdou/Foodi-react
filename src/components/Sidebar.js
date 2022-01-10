import React from "react";
import "../styles/Sidebar.css";
import { GrDeliver } from "react-icons/gr";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import { useProductContext } from "../store/ProductContext";

const Sidebar = () => {
  const { getprice, delivery, setDelivery, cartEmpty } = useProductContext();

  return (
    <>
      {cartEmpty && (
        <div className="sidebar-container">
          <div className="sidebar-header">
            {delivery === true ? (
              <div>
                <GrDeliver className="delivery-icon-on"></GrDeliver>
                <h3 className="delivery-text">Delivery </h3>
                <span className="delivery-price">+4.99$</span>
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
            <label className="delivery-label" htmlFor="switch">
              Delivery
            </label>
          </div>
          <div className="sidebar-items">
            <h3 className="sidebar-items-header">Your Order </h3>
            <h5 className="sidebar-items-name">My Item</h5>

            <SingleProduct></SingleProduct>
          </div>

          {delivery ? (
            <div className="sidebar-footer">
              <span className="delivery-small">delivery +4.99$</span>

              <h3>Sum : {Math.round((getprice + 4.99) * 100) / 100} $</h3>
              <Link to="/cart">
                <button className="btn checkout-btn"> Proceed</button>
              </Link>
            </div>
          ) : (
            <div className="sidebar-footer">
              <h3>Sum : {Math.round(getprice * 100) / 100} $</h3>
              <Link to="/cart">
                <button className="btn checkout-btn"> Proceed</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
