/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/Home.css";
import Sidebar from "./Sidebar";
import Products from "./Products";
import Navigationbar from "./Navigationbar";
const Home = () => {
  return (
    <>
      <div>
        <div className="home-container">
          <h1 className="home-header">Foodi</h1>
          <a href="#products" className="order-btn">
            Order
          </a>
        </div>
        <Navigationbar></Navigationbar>
        <Sidebar />

        <a className="scrolling-page" name="products">
          {" "}
          <Products name="#products" />
        </a>
      </div>
    </>
  );
};

export default Home;
