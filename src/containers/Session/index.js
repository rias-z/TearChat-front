import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'

// container
import PublicMessage from '../PublicMessage'

// containers
import { initializedRoomInfo } from './logic'

const endpoint = 'http://localhost:5000'


class Session extends Component {
  constructor(props) {
    super(props)

    // socket
    const socket = io(endpoint)
    this.state = {
      socket: socket,
    }

    this.init(socket)
  }

  componentWillMount() {
    this.props.initializedRoomInfo()
  }

  // socket通信開始
  init(socket) {
    socket.on('connect', () => {
      const roomId = localStorage.getItem('roomId')
      const userId = localStorage.getItem('userId')
      const userName = localStorage.getItem('userName')

      socket.emit('connected', {
          'roomId': roomId,
          'userId': userId,
          'userName': userName,
      })

      socket.on('recieveMessage', (message) => {
        console.log("recieveMessage:", message)
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
})

const mapDispatchToProps = (dispatch, getState) => ({
  initializedRoomInfo: () => dispatch(initializedRoomInfo(getState))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)
