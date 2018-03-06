import React, { Component } from 'react'
import { connect } from 'react-redux'

// container
import PublicMessage from '../PublicMessage'

// logic
import { initializedRoomInfo, updateMessage } from './logic'


class Session extends Component {
  componentWillMount() {
    this.props.initializedRoomInfo()
      .then(() => {
        this.props.socket.on('receiveMessage', messageInfo => {
          this.props.updateMessage(messageInfo)
        })
      })
  }

  render() {
    if (this.props.isLoading) {
      const members = this.props.membersInfo.map((member, index) => (
        <li key={index}>{member.userName}</li>
      ))

      return (
        <div className='Session'>
          [roomId:{this.props.roomId}] 部屋の名前: {this.props.roomName}
          <br />
          kp: {this.props.kpInfo.userName}
          <br />
          members: {members}
          <br /><br />

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
})

const mapDispatchToProps = (dispatch, getState) => ({
  initializedRoomInfo: () => dispatch(initializedRoomInfo(getState)),
  updateMessage: (messageInfo) => dispatch(updateMessage(messageInfo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)
