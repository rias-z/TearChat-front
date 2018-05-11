import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'


const CreateRoomForm = (props) => (
  <div className='CreateRoomForm'>
    <h2>部屋を作成する</h2>

    <form onSubmit={props.onSubmit} name='roomInfo'>
      部屋の名前: <input name='roomName' type='text' />
      <br />
      参加人数: <input name='capacity' type='text' />
      <br /><br />
      <RaisedButton type='submit' label="部屋を作成する" />
    </form>

    {props.errorMessage}
  </div>
)

export default CreateRoomForm
