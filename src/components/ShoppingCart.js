import React from "react";
import { Link, useLocation } from "react-router-dom";

const ShoppingCart = ({
  cart,
  total,
  increaseQuantity,
  decreaseQuantity,
  //   showProceed
}) => {
  const location = useLocation();

  // Check if the current route is the payment options route
  const isPaymentOptionsRoute = location.pathname === "/payment-options";

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <div class="plus-minus">
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      {!isPaymentOptionsRoute && total > 0 && (
        <Link to="/payment-options">
          <button>Proceed to payment</button>
        </Link>
      )}
    </div>
  );
};

export default ShoppingCart;
