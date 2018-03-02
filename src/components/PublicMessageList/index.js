import React from 'react'


const PublicMessageList = (props) => (
  <div className='PublicMessageList'>
    {props.publicMessages.map((message, index) => (
      <div className='message' key={index}>
        [{index}] ({message.userName}) {message.content}
      </div>
    ))}
  </div>
)

export default PublicMessageList
