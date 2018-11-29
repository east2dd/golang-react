import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getCategories } from './actions'

class App extends Component {
  componentWillMount(){
    this.props.dispatch(getCategories())
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
        <div className="top">
          <h3>Categories</h3>
          <Link to="/products/new">Add</Link>
        </div>
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

export default connect(mapStateToProps)(App)