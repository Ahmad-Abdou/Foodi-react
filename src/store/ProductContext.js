import React, { createContext, useContext, useState, useEffect } from "react";

import axios from "axios";

const ProductProvider = createContext();
const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setnewProduct] = useState({
    name: "",
    price: "",
    image: "",
    type: "",
    size: "",
  });
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [noDuplicateProducts, setNoDuplicateProducts] = useState([]);
  const [orderID, setOrderID] = useState("");
  const [loading, setLoading] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [cartEmpty, IsCartEmpty] = useState(false);
  const [notification, setNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingdProduct, setEditingdProduct] = useState({
    image: "",
    name: "",
    price: 0,
    discount: "",
  });
  const getprice = noDuplicateProducts.reduce((previous, current) => {
    let singleItem = current.price * current.quantity;
    let sum = singleItem + previous;
    return Math.round(sum * 100) / 100;
  }, 0);

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    zipCode: "",
    address: "",
    delivery: delivery,
    itemList: noDuplicateProducts,
    totalPrice: getprice,
    date: "",
  });

  const EditProduct = (id) => {
    let myProduct = products.find((product) => product.id === id);
    console.log(myProduct);
    setEditingdProduct(myProduct);
  };

  const submitOrder = () => {
    setLoading(true);
    axios
      .post("http://localhost:8080/api/v1/order", userInfo)
      .then((response) => {
        setOrderID(response.data.orderId);
        if (delivery === true) {
          setUserInfo({
            ...userInfo,
            totalPrice: getprice + 4.99,
            delivery: true,
            date: new Date().toLocaleString() + "",
          });
        } else {
          setUserInfo({
            ...userInfo,
            totalPrice: getprice + 0,
            delivery: false,
            date: new Date().toLocaleString() + "",
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addingProduct = (id) => {
    const newProduct = products.find((myProduct) => myProduct.id === id);
    setSelectedProduct([...selectedProduct, newProduct]);
    setNoDuplicateProducts([...new Set([...selectedProduct, newProduct])]);
    IsCartEmpty(true);
    setNotification(true);
  };
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setNotification(false);
    }, 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, [notification]);

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
    fetchProducts();
  }, []);

  return (
    <ProductProvider.Provider
      value={{
        products,
        addingProduct,
        selectedProduct,
        noDuplicateProducts,
        setNoDuplicateProducts,
        getprice,
        userInfo,
        submitOrder,
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
