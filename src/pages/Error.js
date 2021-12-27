import React from "react";
import "../styles/Error.css";
import Pizza from "../assets/images/pizzas/error-image-pizza.jpg";

const Error = () => {
  return (
    <div className="error-container">
      <img className="error-img" src={Pizza} alt="" />
      <a href="/" className="error-btn">
        {" "}
        <span className="error-btn-text">Back To Home</span>{" "}
      </a>
    </div>
  );
};

export default Error;
