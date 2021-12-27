import React from "react";
import pizza1 from "../assets/images/pizzas/pizza1.png";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import "../styles/SingleProduct.css";
const SingleProduct = () => {
  return (
    <section className="product-section-contianer">
      <div className="grid-col-right">
        <button className="product-plus-icon">
          <FaPlusCircle></FaPlusCircle>
        </button>
        <span className="product-item-counter">1</span>
        <button className="product-minus-icon">
          <FaMinusCircle></FaMinusCircle>
        </button>
      </div>
      <div className="grid-col-center">
        <span className="single-product-price">1 * 8.99$</span>
      </div>
      <div className="grid-col-top-left">
        <span className="single-product-title">Papperoni</span>
      </div>
      <div className="grid-col-left">
        <img className="single-product-image" src={pizza1} alt="" />
      </div>
    </section>
  );
};

export default SingleProduct;
