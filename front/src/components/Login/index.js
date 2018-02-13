import React, { Component } from 'react'
import LoginForm from './LoginForm'


class Login extends Component {
  componentDidMount() {
    if (this.props.is_authenticated) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className='Login'>
        <h2>Login</h2>
        <LoginForm {...this.props}/>
      </div>
    )
  }
}

export default Login
