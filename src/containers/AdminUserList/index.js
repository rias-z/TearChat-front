import React from 'react'
import { connect } from 'react-redux'

// logic
import { initializedAdminUserList, handleChangeUserIsActive } from './logic'


class AdminUserList extends React.Component {
  componentWillMount() {
    // ユーザリスト取得
    this.props.initializedAdminUserList()
  }

  render() {
    const { userList } = this.props
    const { handleChangeUserIsActive } = this.props

    const renderUserList = userList.map(user => {
      return (
        <div key={user._id}>
          name: {user.userName}
          <br />
          isAdmin: {String(user.isAdmin)}
          <br />
          isActive: {String(user.isActive)}
          <br />
          {(() => {
            if (user.isActive) {
              return (
                <form onSubmit={(e) => {
                  e.preventDefault()
                  handleChangeUserIsActive(user._id, false)
                }}
                >
                  <button type='submit'>Deactive</button>
                </form>
              )
            } else {
              return (
                <form onSubmit={(e) => {
                  e.preventDefault()
                  handleChangeUserIsActive(user._id, true)
                }}
                >
                  <button type='submit'>Active</button>
                </form>
              )
            }
          })()}
          <br />
        </div>
      )
    })

    return (
      <div>
        <h3>User List</h3>
        {renderUserList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userList: state.AdminUserList.userList,
})

const mapDispatchToProps = (dispatch) => ({
  initializedAdminUserList: () => dispatch(initializedAdminUserList()),
  handleChangeUserIsActive: (fkUserId, isActive) =>
    dispatch(handleChangeUserIsActive(fkUserId, isActive)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminUserList)
