import React from 'react'


const Room = props => ( 
  <div className='Room'> 
    [{props.id}] 
    部屋の名前: {props.name}__
    参加人数: {props.participants_number}__
    <input type='button' onClick={props.onClick} value='参加する'/>
  </div> 
)

export default Room
