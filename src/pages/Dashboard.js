import React, { useState, useEffect } from "react";
import { useProductContext } from "../store/ProductContext";
import axios from "axios";
import "../styles/Dashboard.css";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import Added from "../notification/Added";
import Removed from "../notification/Removed";
import Select from "react-select";
import Navigationbar from "../components/Navigationbar";

const Dashboard = () => {
  let getIngredient = () => [];
  const {
    products,
    showModal,
    setShowModal,
    EditProduct,
    newProduct,
    setnewProduct,
    setProducts,
    loading,
  } = useProductContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const options = [
    { value: "Cheese", label: "Cheese" },
    { value: "Onion", label: "Onion" },
    { value: "Pepper", label: "Pepper" },
    { value: "Mashrom", label: "Mashrom" },
    { value: "Salami", label: "Salami" },
    { value: "Olive", label: "Olive" },
    { value: "pickles", label: "pickles" },
    { value: "Kebab", label: "Kebab" },
    { value: "Pepperoni", label: "Pepperoni" },
    { value: "Buffalo", label: "Buffalo" },
    { value: "Tomato", label: "Tomato" },
    { value: "Hot dog", label: "Hot dog" },
  ];
  const uploadImage = (files) => {
    setSelectedFile(files[0]);
  };
  const onChangeHandler = (e) => {
    setnewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (item) => {
    setnewProduct({ ...newProduct, ingredients: item } || []);
  };
  const addItem = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("type", newProduct.type);
    formData.append("size", newProduct.size);
    formData.append("ingredients", getIngredient);
    axios
      .post(`http://localhost:8080/api/v1/item/upload`, formData, config)
      .then((response) => {
        console.log(response.data);
        setIsAdded(true);
        setTimeout(() => {
          setIsAdded(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteProduct = (id) => {
    axios.delete(`http://localhost:8080/api/v1/item/${id}`).then((res) => {
      if (res.data != null) {
        setProducts(products.filter((movie) => movie.id !== id));
        setIsDeleted(true);
        setTimeout(() => {
          setIsDeleted(false);
        }, 3000);
      }
    });
  };
  getIngredient = newProduct.ingredients.map((item) => item.value);

  useEffect(() => {}, [isAdded, isDeleted]);
  return (
    <>
      <Navigationbar></Navigationbar>
      {isAdded && <Added></Added>}
      {isDeleted && <Removed></Removed>}
      {showModal && <Modal></Modal>}
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="dashboard-container">
          <form className="dashboard-form-add-items" onSubmit={addItem}>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="price"
              placeholder="price"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="type"
              placeholder="type"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="size"
              placeholder="size"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="ingredients"
              placeholder="ingredients"
              onChange={onChangeHandler}
            />
            <Select
              options={options}
              onChange={handleSelectChange}
              value={newProduct.ingredients}
              isMulti
            />
            <input
              className="form-file"
              type="file"
              name="image"
              onChange={(e) => uploadImage(e.target.files)}
              value={newProduct.image}
            />
            <button type="submit">Add Item</button>
          </form>
          <div className="all-dashboard-items-container">
            {products.map((product) => {
              const {
                id,
                name,
                price,
                size,
                type,
                image,
                discountAmount,
                ingredients,
                index,
              } = product;
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
                      <span className="card-type">{type}</span>
                      <span className="card-size">{size}</span>

                      <p className="card-paragraph">
                        {ingredients.map((item) => {
                          return (
                            <span className="ingredients-span">{item}</span>
                          );
                        })}
                      </p>
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setShowModal(!showModal);
                          EditProduct(id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => DeleteProduct(id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div key={id}>
                      <div className="card-container">
                        <h1 className="card-header">{name}</h1>

                        <img
                          className="card-image"
                          src={`data:image/jpeg;base64,${image}`}
                          alt={name}
                        />

                        <span className="card-price">
                          {" "}
                          {(Math.round(price * 100) / 100).toFixed(2)} $
                        </span>

                        <span className="card-type">{type}</span>
                        <span className="card-size">{size}</span>
                        <p className="card-paragraph">
                          {ingredients.map((item) => {
                            return (
                              <span className="ingredients-span">{item}</span>
                            );
                          })}
                        </p>

                        <button
                          className="edit-btn"
                          onClick={() => {
                            setShowModal(!showModal);
                            EditProduct(id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => DeleteProduct(id)}
                          className="remove-btn"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
