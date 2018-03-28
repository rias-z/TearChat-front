import React from 'react'
import styled from 'styled-components'


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

const MessageList = (props) => (
  <div className='MessageList'>
    {props.messages.map((message) => (
      <div className='message' key={message._id}>
        <WrapMessage>
          <img
            alt='img'
            width='32'
            height='32'
            src={message.thumbnail}
            style={{
              'border': '1px solid black',
              'borderRadius': '16px',
            }}
          />
          ({message.userName})
          <Message content={message.content} />
        </WrapMessage>
      </div>
    ))}
  </div>
)

export default MessageList
