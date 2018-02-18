import React from 'react'

import RoomList from '../RoomList'


const Lobby = (props) => (
  <div className='Lobby'>
    <h2>Lobby</h2>

    <h3>部屋一覧</h3>
    <RoomList
      {...props}
    />


    <h3>部屋を作成する</h3>
    <input
      type='button'
      value='部屋を作成する'
      onClick={() => {
        props.history.push('/create_room')
      }}
    />
  </div>
)

export default Lobby
