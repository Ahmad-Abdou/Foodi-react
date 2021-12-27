import React from "react";
import "../styles/Home.css";
import Sidebar from "./Sidebar";
import Products from "./Products";
import Navigationbar from "./Navigationbar";
import Fotter from "./Fotter";
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1 className="home-header">Foodi</h1>
        <a href="#products" className="order-btn">
          Order
        </a>
      </div>
      <Sidebar />
      <Navigationbar></Navigationbar>
      <a className="scrolling-page" name="products">
        {" "}
        <Products name="#products" />
      </a>

      <Fotter></Fotter>
    </div>
  );
};

export default Home;
