import React, { Component } from 'react';

class Product extends Component {
  renderProduct = (product) => (
    product ? 
      <div className="category">
        <div>
          <img src="https://via.placeholder.com/300.png"/>
        </div>
        <h2>{ product.Name }</h2>
        <p>{ product.Description }</p>
      </div>
    :null
  )

  render() {
    let product = this.props.product;
    return (
      this.renderProduct(product)
    );
  }
}

export default Product;