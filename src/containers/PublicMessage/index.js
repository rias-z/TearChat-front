import React from 'react'
import { connect } from 'react-redux'

// components
import PublicMessageList from '../../components/PublicMessageList'
import PublicMessageForm from '../../components/PublicMessageForm'

// logic
import { handlePostMessageToPublic } from './logic'


const PublicMessage = (props) => (
  <div className='PublicMessage'>
    <h3>全体チャット</h3>

    <PublicMessageList
      publicMessages={props.publicMessages}
    />
    <PublicMessageForm
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
