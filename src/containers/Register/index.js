import React, { Component } from 'react'
import { connect } from 'react-redux'

// logic
import { handleRegisterSubmit } from './logic'


class Register extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className='Register'>
        <h2>Register</h2>

        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.handleRegisterSubmit(
            e.target.userName.value,
            e.target.password.value
          )
        }}
        >
          userName: <input name='userName' type='text' />
          <br />
          password: <input name='password' type='text' />
          <br />
          <input type='submit' value='register' />
        </form>

        {this.props.infoMessage}
        {this.props.errorMessage}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.App.isAuthenticated,
  infoMessage: state.Register.infoMessage,
  errorMessage: state.Register.errorMessage,
})

const mapDispatchToProps = (dispatch, getState) => ({
  handleRegisterSubmit: (userName, password) =>
    dispatch(handleRegisterSubmit(getState, userName, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
