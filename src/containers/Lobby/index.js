import React, { Component } from 'react'

import RoomList from '../RoomList'


class Lobby extends Component {
  render() {
    return (
      <div className='Lobby'>
        <h2>Lobby</h2>

        <h3>部屋一覧</h3>
        <RoomList />


        <h3>部屋を作成する</h3>
        <input
          type='button' value='部屋を作成する'
          onClick={() => {
            this.props.history.push('/create_room')
          }}
        />
      </div>
    )
  }
}

export default Lobby
