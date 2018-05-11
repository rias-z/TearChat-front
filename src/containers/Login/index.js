import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

// logic
import { handleLoginSubmit } from './logic'

// styles
import { LoginDiv } from './styles'


class Login extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <LoginDiv className='Login'>
        <h2>Login</h2>

        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.handleLoginSubmit(
            e.target.userName.value,
            e.target.password.value
          )
        }}
        >
          userName: <input name='userName' type='text' />
          <br />
          password: <input name='password' type='text' />
          <br /><br />
          <RaisedButton type='submit' label='ログイン' />
        </form>

        {this.props.errorMessage}

        <br /><br />

        <h3>新規登録</h3>
        <RaisedButton
          label='新規登録'
          onClick={() => {
            this.props.history.push('/register')
          }}
        />
      </LoginDiv>
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
