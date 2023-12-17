import React from 'react';
import {Link} from "react-router-dom";

const ShoppingCart = ({ cart, total, increaseQuantity, decreaseQuantity }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
            <Link to="/payment-options">
                <button>Proceed to payment</button>
            </Link>
        </div>
    );
};

export default ShoppingCart;