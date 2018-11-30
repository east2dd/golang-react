import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (item) => {
    return (
        <Link to={`/products/${item.id}`} className="product-item">
            <h2>{ item.name }</h2>
            <p className="product-price">{ item.price }</p>
            <p className="product-description">{ item.description }</p>
        </Link>
    );
};

export default ProductItem;