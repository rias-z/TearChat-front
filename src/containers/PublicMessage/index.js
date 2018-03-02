import React from 'react'
import { connect } from 'react-redux'

// components
import PublicMessageList from '../../components/PublicMessageList'
import PublicMessageForm from '../../components/PublicMessageForm'

// logic
import { handlePostPublicMessageComment } from './logic'


const PublicMessage = (props) => (
  <div className='PublicMessage'>
    <h3>全体チャット</h3>

    <PublicMessageList
      publicMessages={props.publicMessages}
    />
    <PublicMessageForm
      onSubmit={(e) => {
        e.preventDefault()
        props.handlePostPublicMessageComment(
          props.roomId,
          e.target.content.value
        )
      }}
    />
  </div>
)

const mapStateToProps = (state) => ({
  userId: state.App.userId,
  roomId: state.Session.roomId,
  publicMessages: state.PublicMessage.publicMessages,
})

const mapDispatchToProps = (dispatch) => ({
  handlePostPublicMessageComment: (roomId, comment) =>
    dispatch(handlePostPublicMessageComment(roomId, comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicMessage)
