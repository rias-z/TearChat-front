import React from 'react'


const Room = props => ( 
  <div className='Room'> 
    [{props.room_id}] 
    部屋の名前: {props.room_name}__
    参加人数: {props.participants_number}__
    <input type='button' onClick={props.onClick} value='参加する'/>
  </div> 
)

export default Room
