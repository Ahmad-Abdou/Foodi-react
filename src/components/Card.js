import React from "react";
import "../styles/Card.css";
import pizza1 from "../assets/images/pizzas/pizza1.png";
const Card = () => {
  return (
    <div className="card-container">
      <h1 className="card-header">Papperoni</h1>
      <img className="card-image" src={pizza1} alt="" />
      <p className="card-paragraph">
        lorem ipsum dolor sit amet, consectetur lorem lorem
      </p>
      <button className="btn card-btn">Add</button>
    </div>
  );
};

export default Card;
