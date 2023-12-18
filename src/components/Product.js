import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  const truncatedName =
    product.name.length > 30 ? `${product.name.slice(0, 30)}...` : product.name;

  return (
    <div className="product">
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <img src={product.image} alt={product.name} />
        <h3 title={product.name}>{truncatedName}</h3>
        <p>${product.price.toFixed(2)}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
