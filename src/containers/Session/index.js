import React, { Component } from 'react'
import { connect } from 'react-redux'

// container
import PublicMessage from '../PublicMessage'
import PrivateMessage from '../PrivateMessage'

// logic
import { initializedRoomInfo } from './logic'


class Session extends Component {
  componentWillMount() {
    // 部屋情報初期化
    this.props.initializedRoomInfo(this.props)
  }

  componentWillUnmount() {
    if (this.props.socket) {
      // 部屋退出時，socketをdisconnectする
      this.props.socket.disconnect()
    }
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
          isKp: {this.props.isKp.toString()}
          <br />
          ログオンユーザ: {activeUsers}
          <hr />

          <PublicMessage />
          <PrivateMessage />
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
  isKp: state.Session.isKp,
})

const mapDispatchToProps = (dispatch) => ({
  initializedRoomInfo: () => dispatch(initializedRoomInfo()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)
