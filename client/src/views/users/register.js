import React, { Component } from 'react';
import UserRegisterContainer from '../../containers/user/register';

class UserRegister extends Component {
  componentWillMount(){
  }

  render() {
    return (
      <div className="row">
        <h2>Register</h2>
        <UserRegisterContainer />
      </div>
    );
  }
}

export default UserRegister;