import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class ProductList extends Component {
    componentWillMount(){
    }
  
    renderList = ({list}) => {
      if(list){
        return list.map((item)=>{
          return(
            <div key={item.id} className="item-list">
              <div className="name">{item.Name}</div>
              <div className="description">{item.Description}</div>
            </div>
          )
        })
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
      produts: state.products
    }
  }
  
  export default connect(mapStateToProps)(ProductList)