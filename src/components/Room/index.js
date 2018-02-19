import React from 'react'


const Room = (props) => (
  <div className='Room'>
    [{props.roomId}]
    部屋の名前: {props.roomName}--
    参加人数: {props.participantsNumber}--
    <input type='button' onClick={props.onClick} value='参加する' />
  </div>
)

export default Room
