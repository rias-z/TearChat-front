import React from 'react'


const PublicChatForm = (props) => (
  <div className='PublicChatForm'>
    <form onSubmit={props.onSubmit}>
      <input type='text' name='comment' defaultValue='test_comment' />
      <input type='submit' value='send' />
    </form>
  </div>
)

export default PublicChatForm
