import React, { Component } from 'react'
import { connect } from 'react-redux'

import Room from '../../components/Room'

import { initializedOmittedRooms, handleEnteredRoomSubmit } from './logic'


class RoomList extends Component {
  componentWillMount() {
    // 簡易化したroomの情報を取得
    this.props.initializedOmittedRooms()
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className='RoomList'>
          {this.props.rooms.map(room => (
            <Room
              key={room.roomId}
              {...room}
              onClick={(e) => {
                e.preventDefault()
                this.props.handleEnteredRoomSubmit(room.roomId)
              }}
            />
          ))}

          {this.props.errorMessage}
        </div>
      )
    } else {
      return (
        <div className='RoomList'>
          Loading...
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.RoomList.isLoading,
  rooms: state.RoomList.rooms,
  errorMessage: state.RoomList.errorMessage,
})

const mapDispatchToProps = (dispatch, getState) => ({
  initializedOmittedRooms: () => dispatch(initializedOmittedRooms()),
  handleEnteredRoomSubmit: (roomId) => dispatch(handleEnteredRoomSubmit(getState, roomId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList)
