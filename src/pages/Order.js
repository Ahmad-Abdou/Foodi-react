import React from "react";
import { GrDeliver, GrHome } from "react-icons/gr";
import "../styles/Order.css";
import Navigationbar from "../components/Navigationbar";
import { useProductContext } from "../store/ProductContext";
import Timer from "../components/Timer";
import Loading from "../components/Loading";
const Order = () => {
  const { orderID, userInfo, noDuplicateProducts, loading, delivery } =
    useProductContext();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="order-container">
          <span className="order-header-text">Thanks for Your Order</span>
          <span></span>
          <div className="grid-order-row-1">
            <p className="order-paragraph-1">
              Your order number is{" "}
              <span className="order-number">{orderID}</span>{" "}
            </p>
            <div className="grid-order-row-2">
              User Name:{" "}
              <span className="user-name-col">
                {userInfo.firstName} {userInfo.lastName}
              </span>
            </div>
            <div className="grid-order-col-2">
              Email:<span className="grid-email-col">{userInfo.email}</span>
            </div>
            <div className="grid-order-row-3">
              Delivered to :
              <span className="delivery-col">
                {userInfo.address} {userInfo.zipCode}
              </span>
            </div>
            <div className="grid-order-row-4">
              {" "}
              <p>{userInfo.date}</p>
            </div>

            <div className="grid-order-row-5">
              <p className="order-paragraph-2"> You ordered </p>
            </div>

            <div className="grid-order-row-6">
              {noDuplicateProducts.map((item) => {
                const { id, name, price, quantity } = item;
                return (
                  <div className="grid-order-items-container" key={id}>
                    <span className="grid-order-item-col-1">{name}</span>{" "}
                    <span className="grid-order-item-col-2"> {quantity}</span>{" "}
                    <span className="grid-order-item-col-3"> *</span>
                    <span className="grid-order-item-col-4"> {price}$</span>
                  </div>
                );
              })}
              {delivery && (
                <div className="grid-order-delivery-container">
                  <span className="grid-order-delivery-text">Delivery </span>
                  <span></span>
                  <span></span>
                  <span className="grid-order-delivery-price">+ 4.99</span>
                </div>
              )}

              <div className="grid-order-border-top">
                <div className="total-price-container">
                  Total Price :
                  <span className="total-price"> {userInfo.totalPrice}$</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-order-timer">
            <Timer></Timer>
          </div>
          <div className="car-animation-container">
            <section className="animated-car-col">
              <GrDeliver className="drive-icon"></GrDeliver>
              <span className="road"></span>
            </section>
            <section className="animated-home-col">
              <GrHome className="home-icon"></GrHome>
            </section>
          </div>
          <div className="grid-order-back-to-home-container">
            <a href="/" className="error-btn">
              <span className="error-btn-text">Back To Home</span>{" "}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
