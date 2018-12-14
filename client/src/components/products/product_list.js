import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {
    componentWillMount(){
    }

    renderList = ({list}) => {
      if(list){
        return list.map((item)=>{
          return(
            <div key={item.id} className="item-list columns medium-4">
              <div>
                <Link to={`/products/${item.ID}`} className="product-item"><img src="https://via.placeholder.com/300.png"/></Link>
              </div>
              <p className="name">{item.Name}</p>
              <p className="description">{item.Description}</p>
            </div>
          )
        })
      }
    }
  
    render() {
      return (
        <div className="App">
          <div className="categories_container">
            <div class="row">
              {this.renderList(this.props)}
            </div>
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