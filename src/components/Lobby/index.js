import React, {Component} from 'react'
import RoomList from './RoomList'


class Lobby extends Component {
  componentDidMount() {
    // 簡易化したroomの情報を取得
    this.props.apiGetCompactRooms()
  }

  onClick(e) {
    e.preventDefault()
    this.props.history.push('/create_room')
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className='Lobby'>
          <h2>Lobby</h2>

          <h3>部屋一覧</h3>
          <RoomList {...this.props} />


          <h3>部屋を作成する</h3>
          <input type='button' onClick={this.onClick.bind(this)}
                 value='部屋を作成する'/>
        </div>
      )
    } else {
      return (
        <div className='Lobby'>
          Loading...
        </div>
      )
    }
  }
}

export default Lobby
