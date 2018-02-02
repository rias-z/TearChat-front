import React, { Component } from 'react'
import requests from 'superagent'


const endpoint = 'http://localhost:5000'


class RegisterForm extends Component {
  handleRegisterSubmit = (e) => {
    e.preventDefault()

    const userName = e.target.userName.value
    const password = e.target.password.value

    requests
      .post( endpoint + '/api/post/register')
      .send({'userName': userName, 'password': password})
      .then( res => {
        console.log("res")
      })
      .catch( err => {
        console.log("err")
      })
  }

  render() {
    return (
      <form onSubmit={this.handleRegisterSubmit}>
        name: <input name='userName' type='text' defaultValue='rias-z'/><br />
        pword: <input name='password' type='text' defaultValue='0000'/><br />
        <input type='submit' value='register'/>
      </form>
    )
  }
}

class Register extends Component {
  render() {
    return (
      <div className='Register'>
        <h2>Register</h2>

        <RegisterForm />
      </div>
    )
  }
}

export default Register
