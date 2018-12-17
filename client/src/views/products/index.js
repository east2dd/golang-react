import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListContainer from '@/containers/product_list_container';

class ProductIndex extends Component {
    componentWillMount(){
    }

    render() {
      return (
        <ProductListContainer products={ this.props.products }/>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      produts: state.products
    }
  }
  
  export default connect(mapStateToProps)(ProductIndex)