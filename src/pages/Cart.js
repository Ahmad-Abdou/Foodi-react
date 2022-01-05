import React from "react";
import "../styles/Cart.css";
import SingleProduct from "../components/SingleProduct";
import { useProductContext } from "../store/ProductContext";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Navigationbar from "../components/Navigationbar";
const Cart = () => {
  const { userInfo, submitOrder, setUserInfo, loading } = useProductContext();

  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navigationbar></Navigationbar>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="cart-container">
          <section className="cart-body">
            <article>
              <div className="cart-header-text-container">
                <span className="span-text">
                  Please Fill out your information
                </span>
              </div>

              <form className="cart-header">
                <div className="grid-row-1">
                  <input
                    className="cart-form-input"
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    onChange={onChangeHandler}
                  />
                  <span className="bottom-border-first"></span>
                </div>
                <div className="grid-row-2">
                  <input
                    className="cart-form-input"
                    placeholder="Last Name "
                    type="text"
                    name="lastName"
                    onChange={onChangeHandler}
                  />
                  <span className="bottom-border-last"></span>
                </div>
                <div className="grid-row-3">
                  <input
                    className="cart-form-input"
                    placeholder="Email"
                    type="text"
                    name="email"
                    onChange={onChangeHandler}
                  />
                  <span className="bottom-border-email"></span>
                </div>
                <div className="grid-row-4">
                  <input
                    className="cart-form-input"
                    placeholder="Phone Number"
                    type="text"
                    name="phoneNumber"
                    onChange={onChangeHandler}
                  />
                  <span className="bottom-border-phone"></span>
                </div>
                <div className="grid-row-5">
                  <input
                    className="cart-form-input"
                    placeholder="Zip Code"
                    type="text"
                    name="zipCode"
                    onChange={onChangeHandler}
                  />
                  <span className="bottom-border-zip"></span>
                </div>
                <div className="grid-row-6">
                  <input
                    className="cart-form-input"
                    placeholder="Adress"
                    type="text"
                    name="address"
                    onChange={onChangeHandler}
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
              </article>
            </div>

            <div className="grid-row-9">
              <Link className="link-position" to="/order">
                <button className="proceed-btn" onClick={submitOrder}>
                  Proceed
                </button>
              </Link>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Cart;
