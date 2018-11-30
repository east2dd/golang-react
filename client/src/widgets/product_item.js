import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (item) => {
    return (
        <Link to={`/products/${item.ID}`} className="product-item">
            <h2>{ item.Name }</h2>
            <p className="product-price">{ item.Price }</p>
            <p className="product-description">{ item.Description }</p>
        </Link>
    );
};

export default ProductItem;