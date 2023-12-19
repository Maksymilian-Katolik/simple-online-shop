import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ products, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (!searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // var productsInARow = 3;

  // const setProductsInARow = (val) => {
  //   productsInARow = val;
  //   // alert(val);
  // };

  const [productsInARow, setProductsInARow] = useState(3);

  const maxProductsInARow = 4;
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  const showProdOptions = arrayRange(1, maxProductsInARow, 1);
  const showDefault = 3;

  return (
    <div className="whole-product-list">
      <h2>Products</h2>
      <div className="show-settings">
        <p>Show: </p>
        <select onChange={(e) => setProductsInARow(parseInt(e.target.value))}>
          {showProdOptions.map((el) => (
            <option
              key={el}
              value={el}
              selected={el == showDefault ? "selected" : ""}
            >
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-settings">
        <div className="filter-by-category">
          {/* <label>Filter by Category:</label> */}
          <select onChange={(e) => filterProductsByCategory(e.target.value)}>
            <option value="">All Categories</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-by-name">
          {/* <label>Search by Name:</label> */}
          <input
            type="text"
            value={searchTerm}
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            prodInRow={productsInARow}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
