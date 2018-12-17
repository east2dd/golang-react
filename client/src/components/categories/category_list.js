import React, { Component } from 'react';
import CategoryItem from './category_item';

class CategoryList extends Component {
    componentWillMount(){
    }
  
    renderList = (list) => {
      if(list){
        return list.map((item)=>{
          return(
            <CategoryItem item={item} />
          )
        })
      }
    }
  
    render() {
      return (
          <div className="categories-list">
            {this.renderList(this.props.categories)}
          </div>
      );
    }
  }
  
  export default CategoryList;