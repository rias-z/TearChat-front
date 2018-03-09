import React from 'react'


const MessageForm = (props) => (
  <div className='MessageForm'>
    <form onSubmit={props.onSubmit}>
      <input type='text' name='content' defaultValue='test_comment' />
      <input type='submit' value='send' />
    </form>
  </div>
)

export default MessageForm
