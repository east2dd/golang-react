import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import ProductItem from '../widgets/product_item';

class HomeContainer extends Component {
    componentWillMount(){
      this.props.dispatch(getProducts(1,0,'desc'))
    }

    renderItems = ({list}) => (
      list && list.length > 0?  
        list.map( item => (
          <ProductItem {...item} key={item.ID}/>
        ))
      :null
    )

    loadmore = () => {
      let count = this.props.products.list.length;
      this.props.dispatch(getProducts(1,count,'desc',this.props.products.list))
    }

    render() {
      return (
        <div>
          {this.renderItems(this.props.products)}
          <div 
            className="loadmore"
            onClick={this.loadmore}
          >Load More</div>
        </div>
      );
    }
}

function mapStateToProps(state){
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(HomeContainer)