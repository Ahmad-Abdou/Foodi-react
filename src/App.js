// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Fotter";
import { useProductContext } from "./store/ProductContext";
import Loading from "./components/Loading";
function App() {
  const { loading } = useProductContext();
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="app">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/order">
                <Order></Order>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <Route path="/*">
                <Error />
              </Route>
            </Switch>
          </Router>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default App;
