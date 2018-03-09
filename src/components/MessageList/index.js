import React from 'react'


const MessageList = (props) => (
  <div className='MessageList'>
    {props.messages.map((message, index) => (
      <div className='message' key={index}>
        [{index}] ({message.userName}) {message.content}
      </div>
    ))}
  </div>
)

export default MessageList
