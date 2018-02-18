import React from 'react'


const CreateRoomForm = (props) => (
  <div className='CreateRoomForm'>
    <h3>CreateRoomForm</h3>

    <form onSubmit={props.onSubmit} name='roomInfo'>
      部屋の名前: <input name='roomName' type='text' defaultValue='テストルーム' />
      <br />
      参加人数: <input name='participantsNumber' type='text' defaultValue='4' />
      <br />
      <input type='submit' value='createRoom' />
    </form>

    {props.errorMessage}
  </div>
)

export default CreateRoomForm
