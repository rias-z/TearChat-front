import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

// logic
import { handleRegisterSubmit } from './logic'

// styles
import { RegisterDiv } from './styles'


class Register extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  render() {
    const { handleRegisterSubmit } = this.props
    const { infoMessage, errorMessage } = this.props

    return (
      <RegisterDiv className='Register'>
        <h2>Register</h2>

        <form onSubmit={(e) => {
          e.preventDefault()
          handleRegisterSubmit(
            e.target.userName.value,
            e.target.password.value
          )
        }}
        >
          userName: <input name='userName' type='text' />
          <br />
          password: <input name='password' type='text' />
          <br /><br />
          <RaisedButton type='submit' label='登録' />
        </form>

        {infoMessage}
        {errorMessage}
      </RegisterDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.App.isAuthenticated,
  errorMessage: state.Register.errorMessage,
  infoMessage: state.Register.infoMessage,
})

const mapDispatchToProps = (dispatch, getState) => ({
  handleRegisterSubmit: (userName, password) =>
    dispatch(handleRegisterSubmit(getState, userName, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
