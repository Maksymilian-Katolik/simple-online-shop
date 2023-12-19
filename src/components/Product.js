import React from "react";
import { Link } from "react-router-dom";

const MAX_PRODUCTS_IN_A_ROW = 4;

const Product = ({ product, addToCart, prodInRow }) => {
  const truncatedName =
    product.name.length > 30 ? `${product.name.slice(0, 30)}...` : product.name;

  const final_prod_in_a_row =
    prodInRow < MAX_PRODUCTS_IN_A_ROW ? prodInRow : MAX_PRODUCTS_IN_A_ROW;

  return (
    <div className={`product divide${final_prod_in_a_row}`}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <img src={product.image} alt={product.name} />
        <div className="product-clickspace">
          <h3 title={product.name}>{truncatedName}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
