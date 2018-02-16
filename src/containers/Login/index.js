import React, { Component } from 'react'
import { connect } from 'react-redux'

// dispatch
import { handleLoginSubmit } from './logic'


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

         <form onSubmit={(e) => {
           e.preventDefault()
           this.props.handleLoginSubmit(
             e.target.user_name.value, e.target.password.value
           )
         }}>
           user_name: <input name='user_name' type='text' defaultValue='rias-z'/><br />
           password: <input name='password' type='text' defaultValue='0000'/><br />
           <input type='submit' value='login'/>
         </form>

         {this.props.error_message}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  is_authenticated: state.App.is_authenticated,
  error_message: state.App.error_message
})

const mapDispatchToProps = (dispatch, getState) => ({
  handleLoginSubmit: (user_name, password) => dispatch(handleLoginSubmit(getState, user_name, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
