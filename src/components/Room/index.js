import React from 'react'


const Room = (props) => (
  <div className='Room'>
    [{props.roomId}]
      <li>部屋の名前: {props.roomName}</li>
      <li>参加人数: {props.capacity}</li>
      <li>KP: {props.kpName}</li>
    <input type='button' onClick={props.onClick} value='参加する' />
  </div>
)

export default Room
