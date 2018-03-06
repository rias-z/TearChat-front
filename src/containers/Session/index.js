import React, { Component } from 'react'
import { connect } from 'react-redux'

// container
import PublicMessage from '../PublicMessage'

// logic
import { initializedRoomInfo, updateMessage } from './logic'

// action
import { updateActiveUsers } from './action'


class Session extends Component {
  componentWillMount() {
    this.props.initializedRoomInfo()
      .then(() => {
        this.props.socket.on('receiveMessage', messageInfo => {
          this.props.updateMessage(messageInfo)
        })

        this.props.socket.on('receiveActiveUser', activeUsers => {
          this.props.updateActiveUsers(activeUsers)
        })
      })
  }

  componentWillUnmount() {
    // Sessionから離れる場合，socketをdisconnectする
    this.props.socket.disconnect()
  }

  render() {
    if (this.props.isLoading) {
      const members = this.props.membersInfo.map((member, index) => (
        <li key={index}>{member.userName}</li>
      ))

      const activeUsers = this.props.activeUsers.map((user, index) => (
        <li key={index}>{user.userName}</li>
      ))

      return (
        <div className='Session'>
          [roomId:{this.props.roomId}] 部屋の名前: {this.props.roomName}
          <br />
          kp: {this.props.kpInfo.userName}
          <br />
          members: {members}
          <br />
          ログオンユーザ: {activeUsers}
          <hr />

          <PublicMessage />
        </div>
      )
    } else {
      return (
        <div className='Session'>
          Loading...
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.Session.isLoading,
  roomId: state.Session.roomId,
  roomName: state.Session.roomName,
  socket: state.Session.socket,
  kpInfo: state.Session.kpInfo,
  membersInfo: state.Session.membersInfo,
  activeUsers: state.Session.activeUsers,
})

const mapDispatchToProps = (dispatch, getState) => ({
  initializedRoomInfo: () => dispatch(initializedRoomInfo(getState)),
  updateMessage: (messageInfo) => dispatch(updateMessage(messageInfo)),
  updateActiveUsers: (activeUsers) => dispatch(updateActiveUsers(activeUsers)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)
