import React from 'react'
import { connect } from 'react-redux'

// components
import ColumnRoot from '../../components/ColumnRoot'
import ColumnHeader from '../../components/ColumnHeader'
import ColumnBody from '../../components/ColumnBody'
import ColumnFooter from '../../components/ColumnFooter'
import MessageList from '../../components/MessageList'
import MessageForm from '../../components/MessageForm'

// logic
import { handlePostMessageToPrivate } from './logic'


class ColumnPrivateMessage extends React.Component {
  render() {
    const { onClose, handlePostMessageToPrivate, channelId, membersInfo } = this.props

    const messages = this.props.privateMessages.filter(message => {
      return message.channelId === channelId
    })

    // channelIdからmember情報を取得
    const memberIdx = membersInfo.findIndex(member => member.channelId === channelId)
    const memberName = membersInfo[memberIdx].userName

    return (
      <ColumnRoot>
        <ColumnHeader
          name={"To: " + memberName}
          onClose={onClose}
        />

        <ColumnBody>
          <MessageList
            messages={messages}
          />
        </ColumnBody>
        <ColumnFooter>
          <MessageForm
            onPostMessage={handlePostMessageToPrivate(channelId)}
          />
        </ColumnFooter>
      </ColumnRoot>
    )
  }
}

const mapStateToProps = (state) => ({
  privateMessages: state.Session.privateMessages,
  socket: state.Session.socket,
  membersInfo: state.Session.membersInfo,
})

const mapDispatchToProps = (dispatch) => ({
  handlePostMessageToPrivate: (channelId) => (content) =>
    dispatch(handlePostMessageToPrivate(channelId, content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnPrivateMessage)
