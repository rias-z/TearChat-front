import React from 'react'
import { connect } from 'react-redux'

// components
import AdminLogin from '../../components/AdminLogin'
import AdminUserList from '../AdminUserList'

// logic
import { handleLoginSubmit } from './logic'


const Admin = (props) => {
  const { isAdmin, errorMessage, userName } = props
  const { handleLoginSubmit } = props

  if (!isAdmin) {
    return (
      <div>
        <h2>管理者画面(login)</h2>
        <AdminLogin
          onLoginSubmit={(e) => {
            e.preventDefault()

            handleLoginSubmit(
              e.target.userName.value,
              e.target.password.value
            )
          }}
        />
        {errorMessage}
      </div>
    )
  } else {
    return (
      <div>
        <h2>管理者画面</h2>
        <div>AdminUser: {userName}</div>
        <AdminUserList />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAdmin: state.Admin.isAdmin,
  errorMessage: state.Admin.errorMessage,
  userName: state.Admin.userName,
})

const mapDispatchToProps = (dispatch) => ({
  handleLoginSubmit: (userName, password) =>
    dispatch(handleLoginSubmit(userName, password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin)
