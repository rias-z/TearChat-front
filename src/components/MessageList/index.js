import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { STATIC_ENDPOINT } from '../../config/config'

const StyledMessageList = styled.div`
  height: 100%;
  overflow-y: auto;
`

const WrapMessage = styled.div`
  margin: 0.5rem;
`
const StyledMessage = styled.p`
  padding: 0;
  margin: 0;
  line-height: 1.2rem;
`

const Message = (props) => (
  <div>
    {props.content.split('\n').map((m, idx) => (
      <StyledMessage key={idx}>{m}</StyledMessage>
    ))}
  </div>
)

class MessageList extends React.Component {
  componentDidMount() {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const messageList = ReactDOM.findDOMNode(this)
    messageList.scrollTop = messageList.scrollHeight
  }

  render() {
    return (
      <StyledMessageList className='MessageList'>
        {this.props.messages.map((message) => (
          <div className='message' key={message._id}>
            <WrapMessage>
              <img
                alt='img'
                width='32'
                height='32'
                src={STATIC_ENDPOINT + message.thumbnail}
                style={{
                  'border': '1px solid black',
                  'borderRadius': '16px',
                }}
              />
              {message.displayName}
              <Message content={message.content} />
            </WrapMessage>
          </div>
        ))}
      </StyledMessageList>
    )
  }
}

export default MessageList
