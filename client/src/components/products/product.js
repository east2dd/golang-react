import React, { Component } from 'react';
import { getProduct, clearProduct } from '../../actions';
import { connect } from 'react-redux';

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
        <h2>{ product.Name }</h2>
        <p>{ product.Description }</p>
      </div>
    :null
  )

  render() {
    let product = this.props.product;
    return (
      <div>
        {this.renderProduct(product)}
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