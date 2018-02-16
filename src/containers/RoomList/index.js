import React, { Component } from 'react'
import { connect } from 'react-redux'

import Room from '../../components/Room'

// dispatch
import { apiGetCompactRooms } from './api'


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
                console.log("click", room.id)
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

const mapDispatchToProps = (dispatch) => ({
  apiGetCompactRooms: () => dispatch(apiGetCompactRooms())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList)
