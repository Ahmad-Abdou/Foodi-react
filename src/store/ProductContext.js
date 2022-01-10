import React, { createContext, useContext, useState, useEffect } from "react";

import axios from "axios";

const ProductProvider = createContext();
const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [noDuplicateProducts, setNoDuplicateProducts] = useState([]);
  const [orderID, setOrderID] = useState("");
  const [loading, setLoading] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [cartEmpty, IsCartEmpty] = useState(false);
  const [notification, setNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setnewProduct] = useState({
    name: "",
    price: "",
    image: "",
    type: "",
    size: "",
    ingredients: [],
  });
  const [editingdProduct, setEditingdProduct] = useState({
    id: "",
    image: "",
    name: "",
    price: 0,
    discountAmount: 0.0,
    discount: "NO",
  });
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    zipCode: "",
    address: "",
    delivery: delivery,
    itemList: [],
    totalPrice: 0,
    date: "",
  });
  const getprice = noDuplicateProducts.reduce((previous, current) => {
    let singleItem = current.price * current.quantity;
    let sum = singleItem + previous;
    return Math.round(sum * 100) / 100;
  }, 0);

  const EditProduct = (id) => {
    let myProduct = products.find((product) => product.id === id);

    setEditingdProduct(myProduct);
  };
  const addingProduct = (id) => {
    const newProduct = products.find((myProduct) => myProduct.id === id);
    setNoDuplicateProducts([...new Set([...noDuplicateProducts, newProduct])]);
    setUserInfo({
      ...userInfo,
      itemList: [...new Set([...noDuplicateProducts, newProduct])],
    });
    IsCartEmpty(true);
    setNotification(true);
  };

  const fetchProducts = () => {
    setLoading(true);
    return axios
      .get("http://localhost:8080/api/v1/item")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setNotification(false);
    }, 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, [notification, delivery]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductProvider.Provider
      value={{
        products,
        addingProduct,
        noDuplicateProducts,
        setNoDuplicateProducts,
        getprice,
        userInfo,
        setUserInfo,
        orderID,
        loading,
        delivery,
        setDelivery,
        cartEmpty,
        setLoading,
        setNotification,
        notification,
        showModal,
        setShowModal,
        EditProduct,
        editingdProduct,
        setEditingdProduct,
        newProduct,
        setnewProduct,
        setProducts,
        setOrderID,
      }}
    >
      {children}
    </ProductProvider.Provider>
  );
};
export const useProductContext = () => {
  return useContext(ProductProvider);
};
export { ProductContext, ProductProvider };
