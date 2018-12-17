import React, { Component } from 'react';
import { getProduct, clearProduct } from '../../actions';
import { connect } from 'react-redux';
import Product from '@/components/products/product';

class ProductViewContainer extends Component {
  componentWillMount(){
    this.props.dispatch(getProduct(this.props.match.params.id))
  }

  componentWillUnmount(){
    this.props.dispatch(clearProduct())
  }

  render() {
    let product = this.props.product;
    return (
      <Product product={product} />
    );
  }
}

function mapStateToProps(state){
  return {
    product: state.products.product
  }
}

export default connect(mapStateToProps)(ProductViewContainer)