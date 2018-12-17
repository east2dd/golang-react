import React, { Component } from 'react';
import { getCategory, clearCategory } from '../../actions';
import { connect } from 'react-redux';
import Category from '@/components/categories/category';

class CategoryView extends Component {
  componentWillMount(){
    this.props.dispatch(getCategory(this.props.match.params.id))
  }

  componentWillUnmount(){
    this.props.dispatch(clearCategory())
  }

  render() {
    let category = this.props.category;
    return (
      <Category category={category} />
    );
  }
}

function mapStateToProps(state){
  return {
    category: state.categories.category
  }
}

export default connect(mapStateToProps)(CategoryView)