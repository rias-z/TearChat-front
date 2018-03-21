import React from 'react'


const MessageList = (props) => (
  <div className='MessageList'>
    {props.messages.map((message) => (
      <div className='message' key={message._id}>
        ({message.userName}) {message.content}
      </div>
    ))}
  </div>
)

export default MessageList
