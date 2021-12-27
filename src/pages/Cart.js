import React from "react";
import "../styles/Cart.css";
import SingleProduct from "../components/SingleProduct";
const Cart = () => {
  return (
    <div className="cart-container">
      <section className="cart-body">
        <article>
          <div className="cart-header-text-container">
            <span className="span-text">Please Fill out your information </span>
          </div>

          <form className="cart-header">
            <div className="grid-row-1">
              <input
                className="cart-form-input"
                placeholder="First Name"
                type="text"
              />
              <span className="bottom-border-first"></span>
            </div>
            <div className="grid-row-2">
              <input
                className="cart-form-input"
                placeholder="Last Name "
                type="text"
              />
              <span className="bottom-border-last"></span>
            </div>
            <div className="grid-row-3">
              <input
                className="cart-form-input"
                placeholder="Email"
                type="text"
              />
              <span className="bottom-border-email"></span>
            </div>
            <div className="grid-row-4">
              <input
                className="cart-form-input"
                placeholder="Phone Number"
                type="text"
              />
              <span className="bottom-border-phone"></span>
            </div>
            <div className="grid-row-5">
              <input
                className="cart-form-input"
                placeholder="Zip Code"
                type="text"
              />
              <span className="bottom-border-zip"></span>
            </div>
            <div className="grid-row-6">
              <input
                className="cart-form-input"
                placeholder="Adress"
                type="text"
              />

              <span className="bottom-border-address"></span>
            </div>
            <div className="grid-row-7">
              <button className="check-location-btn">Check Location</button>
            </div>
          </form>
        </article>
        <div className="grid-row-8">
          <article className="cart-items">
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
          </article>
        </div>
        <div className="grid-row-9">
          <button className="proceed-btn">Proceed</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
