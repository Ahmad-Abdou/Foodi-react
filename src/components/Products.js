import React from "react";
import "../styles/Product.css";
import Card from "./Card";
import { useProductContext } from "../store/ProductContext";

const Products = () => {
  const { products } = useProductContext();

  return (
    <div key={products.id} className="product-container">
      <Card />
    </div>
  );
};

export default Products;
