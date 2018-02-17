import React, { Component } from 'react'


const CreateRoomForm = (props) => (
  <div className='CreateRoomForm'>
    <h3>CreateRoomForm</h3>

    <form onSubmit={props.onSubmit} name='room_info'>
      部屋の名前: <input name='room_name' type='text' defaultValue='テストルーム'/><br />
      参加人数: <input name='participants_number' type='text' defaultValue='4'/><br />
      <input type='submit' value='create_room'/>
    </form>

    {props.error_message}
  </div>
)

export default CreateRoomForm
