import React, { Component } from 'react'
import { connect } from 'react-redux'

// logic
import { handleLoginSubmit } from './logic'


class Login extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
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
            e.target.userName.value,
            e.target.password.value
          )
        }}
        >
          userName: <input name='userName' type='text' defaultValue='rias-z' />
          <br />
          password: <input name='password' type='text' defaultValue='0000' />
          <br />
          <input type='submit' value='login' />
        </form>

        {this.props.errorMessage}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.App.isAuthenticated,
  errorMessage: state.App.errorMessage
})

const mapDispatchToProps = (dispatch, getState) => ({
  handleLoginSubmit: (userName, password) =>
    dispatch(handleLoginSubmit(getState, userName, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
