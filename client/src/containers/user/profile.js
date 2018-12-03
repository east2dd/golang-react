import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    let user = this.props.user;
    return (
      <div className="row">
        <h1>Profile</h1>
        { user.email }
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)