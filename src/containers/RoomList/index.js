import React, { Component } from 'react'
import { connect } from 'react-redux'

import Room from '../../components/Room'

// dispatch
import { apiGetCompactRooms } from './api'
import { handleEnteredRoomSubmit } from './logic'


class RoomList extends Component {
  componentWillMount() {
    // 簡易化したroomの情報を取得
    this.props.apiGetCompactRooms()
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className='RoomList'>
          {this.props.rooms.map(room => (
            <Room
              key={room.id} {...room}
              onClick={(e) => {
                e.preventDefault()
                this.props.handleEnteredRoomSubmit(room.id)
              }}
            />
          ))}
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
  rooms: state.RoomList.rooms
})

const mapDispatchToProps = (dispatch, getState) => ({
  apiGetCompactRooms: () => dispatch(apiGetCompactRooms()),
  handleEnteredRoomSubmit: (room_id) => dispatch(handleEnteredRoomSubmit(getState, room_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList)
