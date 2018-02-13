import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errorMessage: null
    }
  }

  handleLoginSubmit = async (e) => {
    e.preventDefault()
    // フォームから取得
    const user_name = e.target.userName.value
    const password = e.target.password.value

    const result = await this.props.apiLoginRequest(user_name, password)

    if (result) {
      // ログインできた場合，Lobbyに遷移
      this.props.history.push('/')
    }else {
      // ログインに失敗した場合エラーメッセージを表示
      this.setState({
        errorMessage: 'login failed'
      })
    }
  }

  render() {
    return (
      <div className='LoginForm'>
        <h3>LoginForm</h3>

        <form onSubmit={this.handleLoginSubmit.bind(this)}>
          name: <input name='userName' type='text' defaultValue='rias-z'/><br />
          pword: <input name='password' type='text' defaultValue='0000'/><br />
          <input type='submit' value='login'/>
        </form>

        {this.state.errorMessage}
      </div>
    )
  }
}

export default LoginForm
