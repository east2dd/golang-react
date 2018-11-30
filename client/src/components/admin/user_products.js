import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProducts } from '../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

class UserProducts extends Component {
  componentWillMount(){
    this.props.dispatch(getUserProducts(this.props.user.login.id))
  }

  showUserProducts = (user) => (
    user.userProducts ? 
      user.userProducts.map(item => (
        <tr key={item._id}>
          <td><Link to={
            `/user/products/${item._id}/edit`
          }>
              {item.name}
          </Link></td>
          <td>{item.description}</td>
          <td>
            {moment(item.createAt).format("MM/DD/YY")}
          </td>
        </tr>
      ))
    :null
  )

  render() {
    let user = this.props.user;
    return (
      <div className="user-products">
        <h4>Your products:</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.showUserProducts(user)}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserProducts)