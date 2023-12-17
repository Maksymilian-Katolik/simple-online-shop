import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ addToCart }) => {
    const { productId } = useParams();
    const products = [
        { id: 1, name: 'Product 1', price: 10, image: 'url-to-image-1.jpg', description: 'Detailed description for Product 1.' },
        { id: 2, name: 'Product 2', price: 15, image: 'url-to-image-2.jpg', description: 'Detailed description for Product 2.' },
        { id: 3, name: 'Buty wspinaczkowe Northwind', price: 20, image: 'url-to-image-3.jpg', description: 'Detailed description for Product 3.' }

        // Add more products as needed
    ];

    const product = products.find((p) => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;