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
import { handlePostMessageToPublic } from './logic'


class ColumnPublicMessage extends React.Component {
  render() {
    const { onClose, handlePostMessageToPublic, publicMessages } = this.props

    return (
      <ColumnRoot>
        <ColumnHeader
          name="Public"
          onClose={onClose}
        />

        <ColumnBody>
          <MessageList
            messages={publicMessages}
          />
        </ColumnBody>
        <ColumnFooter>
          <MessageForm
            onPostMessage={handlePostMessageToPublic}
          />
        </ColumnFooter>
      </ColumnRoot>
    )
  }
}

const mapStateToProps = (state) => ({
  publicMessages: state.ColumnPublicMessage.publicMessages,
})

const mapDispatchToProps = (dispatch) => ({
  handlePostMessageToPublic: (content) =>
    dispatch(handlePostMessageToPublic(content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnPublicMessage)
