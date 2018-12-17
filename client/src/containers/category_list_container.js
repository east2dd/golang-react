import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryList from '@/components/categories/category_list';

class CategoryListContainer extends Component {
    componentWillMount(){
    }
  
    renderList = ({list}) => {
      if(list){
        return <CategoryList categories={list} />;
      }
    }
  
    render() {
      return (
        <div className="App">
          <div className="categories_container">
            {this.renderList(this.props)}
          </div>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      categories: state.categories
    }
  }
  
  export default connect(mapStateToProps)(CategoryListContainer)