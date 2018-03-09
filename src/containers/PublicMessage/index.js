import React from 'react'
import { connect } from 'react-redux'

// components
import MessageList from '../../components/MessageList'
import MessageForm from '../../components/MessageForm'

// logic
import { handlePostMessageToPublic } from './logic'


const PublicMessage = (props) => (
  <div className='PublicMessage'>
    <h3>PublicMessage</h3>

    <MessageList
      messages={props.publicMessages}
    />
    <MessageForm
      onSubmit={(e) => {
        e.preventDefault()
        props.handlePostMessageToPublic(
          props.socket,
          e.target.content.value,
        )
      }}
    />
  </div>
)

const mapStateToProps = (state) => ({
  userId: state.App.userId,
  roomId: state.Session.roomId,
  socket: state.Session.socket,
  publicMessages: state.PublicMessage.publicMessages,
})

const mapDispatchToProps = (dispatch) => ({
  handlePostMessageToPublic: (socket, message) =>
    handlePostMessageToPublic(socket, message)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicMessage)
