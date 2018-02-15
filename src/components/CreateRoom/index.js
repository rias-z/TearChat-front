import React, {Component} from 'react'
import CreateRoomForm from './CreateRoomForm'


class CreateRoom extends Component {
  render() {
    return (
      <div className='CreateRoom'>
        <h2>CreateRoom</h2>
        <CreateRoomForm {...this.props}/>
      </div>
    )
  }
}

export default CreateRoom

