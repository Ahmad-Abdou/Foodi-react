import React, { useEffect } from "react";
import { FaPlusCircle, FaMinusCircle, FaRegTrashAlt } from "react-icons/fa";
import { useProductContext } from "../store/ProductContext";
import "../styles/SingleProduct.css";

const SingleProduct = () => {
  const {
    noDuplicateProducts,
    setNoDuplicateProducts,
    setUserInfo,
    userInfo,
    delivery,
  } = useProductContext();
  const newPrice = noDuplicateProducts.reduce((previous, current) => {
    let singleItem = current.price * current.quantity;
    let sum = singleItem + previous;
    return Math.round(sum * 100) / 100;
  }, 0);
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
  const deleteItemOnClick = (id) => {
    setNoDuplicateProducts(
      noDuplicateProducts.filter((product) => product.id !== id)
    );

    setUserInfo({
      ...userInfo,
      itemList: noDuplicateProducts,
      totalPrice: newPrice,
    });
  };
  useEffect(() => {
    if (delivery === true) {
      setUserInfo({
        ...userInfo,
        totalPrice: newPrice + 4.99,
        delivery: true,
      });
    } else {
      setUserInfo({
        ...userInfo,
        totalPrice: newPrice,
        delivery: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noDuplicateProducts]);

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
                {quantity} * {Math.round(price * 100) / 100}$
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
            <div className="trash-container">
              <button
                onClick={() => deleteItemOnClick(id)}
                className="trash-icon"
              >
                <FaRegTrashAlt></FaRegTrashAlt>
              </button>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default SingleProduct;
