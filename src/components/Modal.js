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
    formData.append("name", editingdProduct.name);
    formData.append("price", editingdProduct.price);
    axios
      .post(`http://localhost:8080/api/v1/item/price`, formData, config)
      .then((response) => {
        console.log(response.data);
        setIsEdited(true);
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
              <h1 className="product-orginal-name">{editingdProduct.name}</h1>
              <img
                className="modal-image"
                src={`data:image/jpeg;base64,${editingdProduct.image}`}
                alt={editingdProduct.name}
              />
              <h1 className="product-orginal-price">
                {editingdProduct.price}$
              </h1>
              <h1 className="product-orginal-discount">
                {editingdProduct.discount} Discount
              </h1>
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
