import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (item) => {
    return (
      <div className="products-item">
        <p><Link to={`/products/${item.ID}`} className="product-item"><img src="https://via.placeholder.com/300.png"/></Link></p>
        <h2><Link to={`/products/${item.ID}`} className="product-item">{ item.Name }</Link></h2>
        <p className="product-price">{ item.Price }</p>
        <p className="product-description">{ item.Description }</p>
      </div>
    );
};

export default ProductItem;