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


const ColumnPublicMessage = (props) => {
  const { onClose, onPostMessageToPublic, publicMessages } = props

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
          onPostMessage={onPostMessageToPublic}
        />
      </ColumnFooter>
    </ColumnRoot>
  )
}

const mapStateToProps = (state) => ({
  publicMessages: state.ColumnPublicMessage.publicMessages,
})

const mapDispatchToProps = (dispatch) => ({
  onPostMessageToPublic: (content) =>
    dispatch(handlePostMessageToPublic(content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnPublicMessage)
