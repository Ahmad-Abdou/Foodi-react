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
        // eslint-disable-next-line
        const { id, name, price, size, type, image } = product;
        return (
          <div key={id} className="card-container">
            <h1 className="card-header">{name}</h1>
            <img
              className="card-image"
              src={`data:image/jpeg;base64,${image}`}
              alt={name}
            />
            <span className="card-price">{price}$</span>
            <p className="card-paragraph">
              <span className="ingredients-span">Tomato</span>
              <span className="ingredients-span">Salami</span>
              <span className="ingredients-span">Onion</span>
              <span className="ingredients-span">Olive</span>
              <br></br>
              <span className="ingredients-span">mushroom</span>
            </p>
            <button
              className="btn card-btn"
              onClick={(e) => {
                addingProduct(id);
              }}
            >
              Add
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Card;
