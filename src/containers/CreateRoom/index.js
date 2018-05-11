import React from 'react'
import { connect } from 'react-redux'

// components
import CreateRoomForm from '../../components/CreateRoomForm'

// logic
import { handleCreateRoomSubmit } from './logic'

// styles
import { CreateRoomDiv } from './styles'


const CreateRoom = (props) => (
  <CreateRoomDiv className='CreateRoom'>
    <CreateRoomForm
      errorMessage={props.errorMessage}
      onSubmit={(e) => {
        e.preventDefault()
        props.handleCreateRoomSubmit(e.target)
      }}
    />
  </CreateRoomDiv>
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
