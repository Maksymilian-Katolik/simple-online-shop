import React, { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import PaymentOptions from "./PaymentOptions";

import "./App.css";
import ProductDetails from "./ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import products from "./products.json";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cart.map((item) =>
        item.id === existingProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
        : item
    );

    // Remove the item if the quantity becomes zero
    const filteredCart = updatedCart.filter((item) => item.quantity > 0);

    setCart(filteredCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayment = (option) => {
    // Handle the payment logic based on the selected option
    console.log(`Processing payment: ${option}`);
    // You can implement more detailed payment logic here
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartCount={cart.length} />
        <div className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ProductList products={products} addToCart={addToCart} />
              }
            ></Route>
            <Route
              path="/payment-options"
              element={
                <PaymentOptions
                  cart={cart}
                  total={calculateTotal()}
                  handlePayment={handlePayment}
                />
              }
            ></Route>
            <Route
              path="/product/:productId"
              element={<ProductDetails addToCart={addToCart} />}
            ></Route>
          </Routes>
          <ShoppingCart
            cart={cart}
            total={calculateTotal()}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
