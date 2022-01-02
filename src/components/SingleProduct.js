import React, { useEffect } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useProductContext } from "../store/ProductContext";
import "../styles/SingleProduct.css";

const SingleProduct = () => {
  const { noDuplicateProducts, setNoDuplicateProducts } = useProductContext();

  const increaseQuantity = (index) => {
    const newItem = [...noDuplicateProducts];
    newItem[index].quantity++;

    setNoDuplicateProducts(newItem);
  };
  const decreaseQuantity = (index, id) => {
    const newItem = [...noDuplicateProducts];

    if (newItem[index].quantity <= 1) {
      const newItem = noDuplicateProducts.filter((item) => item.id !== id);
      setNoDuplicateProducts(newItem);
    } else {
      newItem[index].quantity--;
      setNoDuplicateProducts(newItem);
    }
  };
  useEffect(() => {}, [noDuplicateProducts]);

  return (
    <>
      {noDuplicateProducts.map((product, index) => {
        const { id, name, image, price, quantity } = product;
        return (
          <section key={id} className="product-section-contianer">
            <div className="grid-col-right">
              <button
                className="product-minus-icon"
                onClick={() => decreaseQuantity(index)}
              >
                <FaMinusCircle></FaMinusCircle>
              </button>

              <span className="product-item-counter">{quantity}</span>
              <button
                className="product-plus-icon"
                onClick={() => increaseQuantity(index)}
              >
                <FaPlusCircle></FaPlusCircle>
              </button>
            </div>

            <div className="grid-col-center">
              <span className="single-product-price">
                {quantity} * {price}$
              </span>
              <span className="total-price-for-single-item">
                {Math.round(price * quantity * 100) / 100} $
              </span>
            </div>
            <div className="grid-col-top-left">
              <span className="single-product-title">{name}</span>
            </div>
            <div className="grid-col-left">
              <img
                className="single-product-image"
                src={`data:image/jpeg;base64,${image}`}
                alt={name}
              />
            </div>
          </section>
        );
      })}
    </>
  );
};

export default SingleProduct;
