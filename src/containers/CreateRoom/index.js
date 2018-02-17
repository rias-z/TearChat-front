import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import CreateRoomForm from '../../components/CreateRoomForm'

// logic
import { handleCreateRoomSubmit } from './logic'


class CreateRoom extends Component {
  render() {
    return (
      <div className='CreateRoom'>
        <h2>CreateRoom</h2>
        <CreateRoomForm
          error_message={this.props.error_message}
          onSubmit={(e) => {
            e.preventDefault()
            this.props.handleCreateRoomSubmit(e.target)
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error_message: state.CreateRoom.error_message
})

const mapDispatchToProps = (dispatch, getState) => ({
  handleCreateRoomSubmit: (form_room_info) => dispatch(handleCreateRoomSubmit(getState, form_room_info))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoom)
