import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import SingleProduct from "../components/SingleProduct";
import { useProductContext } from "../store/ProductContext";
import { Redirect } from "react-router-dom";
import Navigationbar from "../components/Navigationbar";
import axios from "axios";
import Warning from "../notification/Warning";
import Alert from "../notification/Alert";
const Cart = () => {
  const {
    userInfo,
    setUserInfo,
    setOrderID,
    delivery,
    getprice,
    noDuplicateProducts,
  } = useProductContext();
  const [warning, setWarning] = useState(false);
  const [alert, setAlert] = useState(false);
  const [successOrder, setSuccessOrder] = useState(false);
  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const checklocationButton = (e) => {
    e.preventDefault();
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
    }, 3000);
  };
  const submitOrder = () => {
    if (
      userInfo.email === "" ||
      userInfo.adress === "" ||
      userInfo.firstName === "" ||
      userInfo.lastName === ""
    ) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    } else
      axios
        .post("http://localhost:8080/api/v1/order", userInfo)
        .then((response) => {
          setOrderID(response.data.orderId);
          setSuccessOrder(true);
        })
        .catch((error) => {
          console.error(error);
        });
  };
  useEffect(() => {
    if (delivery === true) {
      setUserInfo({
        ...userInfo,
        totalPrice: getprice + 4.99,
        delivery: true,
      });
    } else {
      setUserInfo({
        ...userInfo,
        totalPrice: getprice,
        delivery: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {successOrder && <Redirect to="/order"></Redirect>}
      {alert && <Alert></Alert>}
      {warning && <Warning></Warning>}
      <Navigationbar></Navigationbar>
      <div className="cart-container">
        <section className="cart-body">
          <article>
            <div className="cart-header-text-container">
              <span className="cart-span-text">
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
                  required
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
                  required
                />
                <span className="bottom-border-address"></span>
              </div>
              <div className="grid-row-7">
                <button
                  onClick={checklocationButton}
                  className="check-location-btn"
                >
                  Check Location
                </button>
              </div>
            </form>
          </article>
          <div className="grid-row-8">
            <article className="cart-items">
              <SingleProduct></SingleProduct>
            </article>
          </div>

          {noDuplicateProducts.length > 0 ? (
            <div className="grid-row-9">
              {/* <Link className="link-position" to="/order"> */}
              <button className="proceed-btn" onClick={submitOrder}>
                Checkout
              </button>
              {/* </Link> */}
            </div>
          ) : (
            <div className="grid-row-9">
              <button className="proceed-btn-disabled">Checkout</button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Cart;
