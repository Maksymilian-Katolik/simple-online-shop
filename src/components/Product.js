import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => {
    return (
        <div className="product">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;