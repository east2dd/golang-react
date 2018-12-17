import React, { Component } from 'react';

class Category extends Component {
  renderCategory = (category) => (
    category ? 
      <div className="category">
        <div>
          <img src="https://via.placeholder.com/300.png"/>
        </div>
        <h2>{ category.Name }</h2>
        <p>{ category.Description }</p>
      </div>
    :null
  )

  render() {
    let category = this.props.category;
    return (
      this.renderCategory(category)
    );
  }
}

export default Category;