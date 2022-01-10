import React from "react";
import "../styles/Card.css";
import { useProductContext } from "../store/ProductContext";
import AddedToCart from "../notification/AddedToCart";

const Card = () => {
  const { products, addingProduct, notification } = useProductContext();

  return (
    <>
      {notification && <AddedToCart></AddedToCart>}
      {products.map((product) => {
        const { id, name, price, image, discountAmount, ingredients } = product;
        return (
          <div key={id}>
            {parseInt(discountAmount) > 0 ? (
              <div className="card-container">
                <h1 className="card-header">{name}</h1>
                <span className="discount-amount">{discountAmount}</span>
                <img
                  className="card-image"
                  src={`data:image/jpeg;base64,${image}`}
                  alt={name}
                />
                <span className="card-old-price">
                  {" "}
                  {(
                    Math.round(
                      (price / (1 - parseInt(discountAmount) / 100)) * 100
                    ) / 100
                  ).toFixed(2)}{" "}
                  $
                </span>
                <span className="card-new-price">
                  {" "}
                  {(Math.round(price * 100) / 100).toFixed(2)} $
                </span>
                <p className="card-paragraph">
                  {ingredients.map((item, index) => {
                    return (
                      <span key={index} className="ingredients-span">
                        {item}
                      </span>
                    );
                  })}
                </p>
                <button
                  className="btn card-btn"
                  onClick={() => addingProduct(id)}
                >
                  Add
                </button>
              </div>
            ) : (
              <div className="card-container">
                <h1 className="card-header">{name}</h1>
                <img
                  className="card-image"
                  src={`data:image/jpeg;base64,${image}`}
                  alt={name}
                />
                <span className="card-price">
                  {(Math.round(price * 100) / 100).toFixed(2)} $
                </span>
                <p className="card-paragraph">
                  {ingredients.map((item, index) => {
                    return (
                      <span key={index} className="ingredients-span">
                        {item}
                      </span>
                    );
                  })}
                </p>
                <button
                  className="btn card-btn"
                  onClick={(e) => addingProduct(id)}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Card;
