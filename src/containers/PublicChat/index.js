import React from 'react'
import { connect } from 'react-redux'

// components
import PublicChatList from '../../components/PublicChatList'
import PublicChatForm from '../../components/PublicChatForm'

// logic
import { handlePostPublicChatComment } from './logic'


const PublicChat = (props) => (
  <div className='PublicChat'>
    <h3>全体チャット</h3>

    <PublicChatList
      publicChat={props.publicChat}
    />
    <PublicChatForm
      onSubmit={(e) => {
        e.preventDefault()
        props.handlePostPublicChatComment(
          props.roomId,
          e.target.comment.value
        )
      }}
    />
  </div>
)

const mapStateToProps = (state) => ({
  userId: state.App.userId,
  roomId: state.Session.roomId,
  publicChat: state.PublicChat.publicChat,
})

const mapDispatchToProps = (dispatch) => ({
  handlePostPublicChatComment: (roomId, comment) =>
    dispatch(handlePostPublicChatComment(roomId, comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicChat)
