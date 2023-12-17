import React, {useState} from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const uniqueCategories = [...new Set(products.map((product) => product.category))];

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

    return (
        <div>
            <h2>Products</h2>
            <div>
                <label>Filter by Category:</label>
                <select onChange={(e) => filterProductsByCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {uniqueCategories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Search by Name:</label>
                <input type="text" value={searchTerm} onChange={handleSearch} />
            </div>
            <div className="product-list">
                {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;