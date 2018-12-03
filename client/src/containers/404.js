import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {
    componentWillMount(){
    }


    render() {
      return (
        <div className="row">
          <div className="columns">
            <h2>404 NOT FOUND</h2>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NotFound)