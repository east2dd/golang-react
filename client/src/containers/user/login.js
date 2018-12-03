import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions'

class Login extends Component {
  state = {
    email:'',
    password:'',
    error:'',
    success:false
  }

  handleInputEmail = (event) => {
    this.setState({email:event.target.value})
  }

  handleInputPassword = (event) => {
    this.setState({password:event.target.value})
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user.login && nextProps.user.login.status){
      this.props.history.push('/user')
    }
  }

  submitForm = (e) =>{
    e.preventDefault();
    this.props.dispatch(loginUser(this.state)).then((response)=>{
      if(response.payload.status === true)
      {
        this.props.history.push('/')
      }
    })
  }

  render() {
    let user = this.props.user;
    return (
      <div className="row">
        <form onSubmit={this.submitForm}>
          <h2>Log in here</h2>

          <div className="form_element">
            <input 
                type="email"
                placeholder="Enter your mail"
                value={this.state.email}
                onChange={this.handleInputEmail}
            />
          </div>

          <div className="form_element">
            <input 
                type="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleInputPassword}
            />
          </div>

          <button type="submit" className="button">Log in</button>

          <div className="error callout alert">
          {
            user.login ? 
                <div>{ user.login.message }</div>
            :null
          }
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Login)