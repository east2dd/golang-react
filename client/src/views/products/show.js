import React, { Component } from 'react';
import { getProduct, clearProduct } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductView extends Component {
  componentWillMount(){
    this.props.dispatch(getProduct(this.props.match.params.id))
  }

  componentWillUnmount(){
    this.props.dispatch(clearProduct())
  }

  renderProduct = (product) => (
    product ? 
      <div className="product">
        <div>
          <img src="https://via.placeholder.com/300.png"/>
        </div>
        <h2>{ product.Name }</h2>
        <p>{ product.Description }</p>
        <p><Link to={`/products/${product.ID}/edit`} className="button edit-product">Edit { product.Name }</Link></p>
      </div>
    :null
  )

  render() {
    let product = this.props.product;
    return (
      <div>
        <div className="row">
          <div className="columns"><h1>Product</h1></div>
        </div>
        <div className="row">
          <div className="columns">
            {this.renderProduct(product)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    product: state.products.product
  }
}

export default connect(mapStateToProps)(ProductView)