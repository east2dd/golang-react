import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryListContainer from '@/containers/category_list_container';

class CategoryIndex extends Component {
    componentWillMount(){
    }
  
    render() {
      return (
        <CategoryListContainer categories={ this.props.categories }/>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      categories: state.categories
    }
  }
  
  export default connect(mapStateToProps)(CategoryIndex)