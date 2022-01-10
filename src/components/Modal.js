import React, { useState } from "react";
import "../styles/Modal.css";
import { useProductContext } from "../store/ProductContext";
import { FaRegTimesCircle } from "react-icons/fa";
import axios from "axios";
import Edited from "../notification/Edited";
const Modal = () => {
  const { setShowModal, editingdProduct, setEditingdProduct } =
    useProductContext();
  const [isEdited, setIsEdited] = useState(false);

  const onChangeHandler = (e) => {
    setEditingdProduct({ ...editingdProduct, [e.target.name]: e.target.value });
  };

  const changePriceHandlar = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("price", editingdProduct.price);
    axios
      .post(
        `http://localhost:8080/api/v1/item/price/${parseInt(
          editingdProduct.id
        )}`,
        formData,
        config
      )
      .then((response) => {
        setIsEdited(true);
        window.location.reload(false);
        setTimeout(() => {
          setIsEdited(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeDiscountHandlar = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("discount", editingdProduct.discount);
    axios
      .post(
        `http://localhost:8080/api/v1/item/discount/${parseInt(
          editingdProduct.id
        )}`,
        formData,
        config
      )
      .then((response) => {
        setIsEdited(true);
        window.location.reload(false);
        setTimeout(() => {
          setIsEdited(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isEdited && <Edited></Edited>}

      <div className="modal-container">
        <div className="modal-content">
          <div>
            <form className="form-content" action="">
              <span className="product-orginal-name">
                {editingdProduct.name}
              </span>
              <img
                className="modal-image"
                src={`data:image/jpeg;base64,${editingdProduct.image}`}
                alt={editingdProduct.name}
              />
              <span className="product-orginal-price">
                {editingdProduct.price}$
              </span>
              <span className="product-orginal-discount">
                {editingdProduct.discountAmount}
              </span>
              <input
                className="modal-inputs-1"
                type="text"
                name="name"
                placeholder="Name"
                onChange={onChangeHandler}
              />
              <input
                className="modal-inputs-2"
                type="text"
                name="price"
                placeholder="price"
                onChange={onChangeHandler}
              />
              <input
                className="modal-inputs-3"
                type="text"
                name="discount"
                placeholder="discount"
                onChange={onChangeHandler}
              />

              <button onClick={changePriceHandlar} className="modal-edit-btn">
                Change Price
              </button>
              <button
                onClick={changeDiscountHandlar}
                className="modal-discount-btn"
              >
                Create Discount
              </button>
            </form>
          </div>
          <button onClick={() => setShowModal(false)} className="close-modal">
            <FaRegTimesCircle className="close-icon"></FaRegTimesCircle>
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
