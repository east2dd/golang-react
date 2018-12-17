import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '@/components/products/product_list';

class ProductListContainer extends Component {
    componentWillMount(){
    }

    render() {
      return (
          <div className="product-list-container">
            <ProductList products={this.props.products} />
          </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      produts: state.products
    }
  }
  
  export default connect(mapStateToProps)(ProductListContainer)