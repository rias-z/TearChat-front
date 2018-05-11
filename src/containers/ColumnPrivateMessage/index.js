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
    const {
      onClose, onPostMessageToPrivate, channelId, isKp, membersInfo
    } = this.props

    const messages = this.props.privateMessages.filter(message => {
      return message.channelId === channelId
    })

    // channelIdからmember情報を取得
    const memberIdx = membersInfo.findIndex(member => member.channelId === channelId)
    const memberName = membersInfo[memberIdx].userName

    // KpとMemberでカラムヘッダーのタイトルを変更
    let columnName = ''
    if (!isKp) {
      columnName = 'To: KP'
    } else {
      columnName = 'To: ' + memberName
    }

    return (
      <ColumnRoot>
        <ColumnHeader
          name={columnName}
          onClose={onClose}
        />

        <ColumnBody>
          <MessageList
            messages={messages}
          />
        </ColumnBody>
        <ColumnFooter>
          <MessageForm
            onPostMessage={onPostMessageToPrivate(channelId)}
          />
        </ColumnFooter>
      </ColumnRoot>
    )
  }
}

const mapStateToProps = (state) => ({
  privateMessages: state.ColumnPrivateMessage.privateMessages,
  isKp: state.Session.isKp,
  socket: state.Session.socket,
  membersInfo: state.Session.membersInfo,
})

const mapDispatchToProps = (dispatch) => ({
  onPostMessageToPrivate: (channelId) => (content) =>
    dispatch(handlePostMessageToPrivate(channelId, content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnPrivateMessage)
