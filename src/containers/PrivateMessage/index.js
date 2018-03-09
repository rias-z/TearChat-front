import React from 'react'
import { connect } from 'react-redux'

// components
import MessageList from '../../components/MessageList'
import MessageForm from '../../components/MessageForm'

// logic
import { handlePostMessageToPrivate } from './logic'


class PrivateMessage extends React.Component{
  render() {
    if (this.props.isKp === true) {
      return (
        <div className='PrivateMessage'>
          <h3>PrivateMessage(KP)</h3>

          {
            this.props.membersInfo.map((member, index) => {
              const filterMessages = this.props.privateMessages.filter(message =>
                message.channelId === member.channelId
              )

              return (
                <div key={index}>
                  [channelId: {member.channelId}] {member.userName}

                  <MessageList
                    messages={filterMessages}
                  />
                  <MessageForm
                    onSubmit={(e) => {
                      e.preventDefault()
                      this.props.handlePostMessageToPrivate(
                        this.props.socket,
                        member.channelId,
                        e.target.content.value,
                      )
                    }}
                  />
                  <br />
                </div>
              )
            })
          }
        </div>
      )
    } else {
      const filterMessages = this.props.privateMessages.filter(message =>
        message.channelId === this.props.selfChannelId
      )

      return (
        <div className='PrivateMessage'>
          <h3>PrivateMessage(Member)</h3>

          <MessageList
            messages={filterMessages}
          />
          <MessageForm
            onSubmit={(e) => {
              e.preventDefault()
              this.props.handlePostMessageToPrivate(
                this.props.socket,
                this.props.selfChannelId,
                e.target.content.value,
              )
            }}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  socket: state.Session.socket,
  kpInfo: state.Session.kpInfo,
  membersInfo: state.Session.membersInfo,
  isKp: state.Session.isKp,
  selfChannelId: state.Session.selfChannelId,
  privateMessages: state.PrivateMessage.privateMessages,
})

const mapDispatchToProps = (dispatch) => ({
  handlePostMessageToPrivate: (socket, channelId, content) =>
    handlePostMessageToPrivate(socket, channelId, content)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateMessage)
