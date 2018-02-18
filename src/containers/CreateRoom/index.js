import React from 'react'
import { connect } from 'react-redux'

// components
import CreateRoomForm from '../../components/CreateRoomForm'

// logic
import { handleCreateRoomSubmit } from './logic'


const CreateRoom = (props) => (
  <div className='CreateRoom'>
    <h2>CreateRoom</h2>
    <CreateRoomForm
      errorMessage={props.errorMessage}
      onSubmit={(e) => {
        e.preventDefault()
        props.handleCreateRoomSubmit(e.target)
      }}
    />
  </div>
)

const mapStateToProps = (state) => ({
  errorMessage: state.CreateRoom.errorMessage
})

const mapDispatchToProps = (dispatch, getState) => ({
  handleCreateRoomSubmit: (formRoomInfo) =>
    dispatch(handleCreateRoomSubmit(getState, formRoomInfo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoom)
