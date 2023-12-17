import React from 'react';

const PaymentOptions = ({ cart, total, handlePayment }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
            <h2>Payment Options</h2>
            <button onClick={() => handlePayment('Cash on delivery')}>Cash on delivery</button>
            <button onClick={() => handlePayment('Pay with BLIK')}>Pay with BLIK</button>
            <button onClick={() => handlePayment('Pay with Credit/Debit Card')}>Pay with Credit/Debit Card</button>
            <button onClick={() => handlePayment('Pay with your soul')}>Pay with your soul</button>
        </div>
    );
};

export default PaymentOptions;