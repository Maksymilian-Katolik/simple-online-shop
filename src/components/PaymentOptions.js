import React from "react";
import { Link } from "react-router-dom";

const PaymentOptions = ({ cart, total, handlePayment }) => {
  return (
    <div className="payment-options">
      {/*<h2>Shopping Cart</h2>*/}
      {/*<ul>*/}
      {/*    {cart.map((item) => (*/}
      {/*        <li key={item.id}>*/}
      {/*            {item.name} - ${item.price} x {item.quantity}*/}
      {/*        </li>*/}
      {/*    ))}*/}
      {/*</ul>*/}
      {/*<p>Total: ${total.toFixed(2)}</p>*/}
      <h2>Payment Options</h2>

      <div className="payment-container">
        <button
          className="payment-button"
          onClick={() => handlePayment("Cash on delivery")}
        >
          Cash on delivery
        </button>
        <button
          className="payment-button"
          onClick={() => handlePayment("Pay with BLIK")}
        >
          Pay with BLIK
        </button>
        <button
          className="payment-button"
          onClick={() => handlePayment("Pay with Credit/Debit Card")}
        >
          Pay with Credit/Debit Card
        </button>
        <button
          className="payment-button"
          onClick={() => handlePayment("Pay with your soul")}
        >
          Pay with your soul
        </button>
      </div>

      <p></p>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default PaymentOptions;
