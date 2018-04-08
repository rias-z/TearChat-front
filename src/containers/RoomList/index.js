import React, { Component } from 'react'
import { connect } from 'react-redux'

import Room from '../../components/Room'

// logic
import { initializedOmittedRooms, handleEnteredRoomSubmit } from './logic'


class RoomList extends Component {
  componentWillMount() {
    // 簡易化したroomの情報を取得
    this.props.initializedOmittedRooms()
  }

  render() {
    const { handleEnteredRoomSubmit } = this.props
    const { errorMessage, isLoading, rooms } = this.props

    if (isLoading) {
      return (
        <div className='RoomList'>
          {rooms.map(room => (
            <Room
              key={room.roomId}
              {...room}
              onClick={(e) => {
                e.preventDefault()
                handleEnteredRoomSubmit(room.roomId)
              }}
            />
          ))}

          {errorMessage}
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
  errorMessage: state.RoomList.errorMessage,
  isLoading: state.RoomList.isLoading,
  rooms: state.RoomList.rooms,
})

const mapDispatchToProps = (dispatch, getState) => ({
  handleEnteredRoomSubmit: (roomId) =>
    dispatch(handleEnteredRoomSubmit(getState, roomId)),
  initializedOmittedRooms: () => dispatch(initializedOmittedRooms()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList)
