import React from 'react'


const AdminLogin = (props) => {
  const { onLoginSubmit } = props

  return (
    <div>
      <h2>管理者ログイン</h2>
      <form onSubmit={onLoginSubmit}>
        userName: <input type='text' name='userName' required />
        <br />
        password: <input type='text' name='password' required />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
