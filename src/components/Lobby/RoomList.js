import React, {Component} from 'react'


class Room extends Component {
  render() {
    return (
      <div className='Room'>
        部屋ID: {this.props.id}
        部屋の名前: {this.props.name}
        参加人数: {this.props.participants_number}
      </div>
    )
  }
}


class RoomList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const roomList = this.props.rooms.map(room => (
      <Room key={room.id} {...room} />
    ))
    return (
      <div className='RoomList'>
        <h2>RoomList</h2>

        {roomList}
      </div>
    )
  }
}

export default RoomList
