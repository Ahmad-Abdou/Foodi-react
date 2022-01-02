// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/dashboard";
// import CheckoutForm from "./payments/CheckoutForm";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

function App() {
  // const stripePromise = loadStripe(
  //   "pk_test_51JS1ZyKM3YKWO0iclSAmlLdHzlcGMbOgM67JmZtwmiToYtXtcuWxL9OJ3HOXPaZ9DF9lncupCM74DUtLaMURrM4y00HChZx0TQ"
  // );

  // const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  // const appearance = {
  //   theme: "stripe",
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };
  return (
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
          {/* <Route path="/checkout">
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </Route> */}
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
