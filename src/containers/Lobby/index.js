import React from 'react'

import RoomList from '../RoomList'


const Lobby = (props) => (
  <div className='Lobby'>
    <h2>Lobby</h2>

    <h3>PCを作成/編集する</h3>
    <input
      type='button'
      value='PCを作成/編集する'
      onClick={() => {
        props.history.push('/manager_pc')
      }}
    />

    <h3>部屋を作成する</h3>
    <input
      type='button'
      value='部屋を作成する'
      onClick={() => {
        props.history.push('/create_room')
      }}
    />

    <h3>部屋一覧</h3>
    <RoomList
      {...props}
    />

  </div>
)

export default Lobby
