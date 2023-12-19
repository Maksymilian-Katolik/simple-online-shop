import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./products.json";

const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} />
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
