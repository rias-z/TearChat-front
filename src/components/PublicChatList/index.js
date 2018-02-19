import React from 'react'


const PublicChatList = (props) => (
  <div className='PublicChatList'>
    {props.publicChat.map(chat => (
      <div className='chat' key={chat.pubId}>
        [{chat.pubId}] userId:{chat.userId} {chat.comment}
      </div>
    ))}
  </div>
)

export default PublicChatList
