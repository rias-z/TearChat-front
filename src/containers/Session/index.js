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
      return (
        <div className='Session'>
          [{this.props.roomId}] 部屋の名前: {this.props.roomName}
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
})

const mapDispatchToProps = (dispatch, getState) => ({
  initializedRoomInfo: () => dispatch(initializedRoomInfo(getState)),
  updateMessage: (messageInfo) => dispatch(updateMessage(messageInfo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)
