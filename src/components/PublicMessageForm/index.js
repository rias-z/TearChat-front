import React from 'react'


const PublicMessageForm = (props) => (
  <div className='PublicMessageForm'>
    <form onSubmit={props.onSubmit}>
      <input type='text' name='content' defaultValue='test_comment' />
      <input type='submit' value='send' />
    </form>
  </div>
)

export default PublicMessageForm
