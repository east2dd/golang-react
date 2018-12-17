import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = (item) => {
  return (
    <div>
      <h2><Link to={`/categories/${item.ID}`} className="category-name">{ item.Name }</Link></h2>
      <p className="category-description">{ item.Description }</p>
    </div>
  );
};

export default CategoryItem;