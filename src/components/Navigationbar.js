import React from "react";
import pizza from "../assets/images/pizzas/pizza-navbar.png";
import { Link } from "react-router-dom";
import "../styles/Navigationbar.css";
const Navigationbar = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="nav-background">
          <img className="nav-icon" src={pizza} alt="" />
          <div className="nav-links">
            <Link className="nav-item-1" to="/">
              Home
            </Link>
            <Link className="nav-item-2" to="/cart">
              Cart
            </Link>
            <Link className="nav-item-3" to="/order">
              Order
            </Link>
            <Link className="nav-item-4" to="/about">
              About
            </Link>
            <Link className="nav-item-5" to="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigationbar;
