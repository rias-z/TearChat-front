import React from 'react'


const Header = (props) => (
  <div className='Header'>
    Header:::
    <input type='button' onClick={props.onClick} value='logout' />
    <hr />
  </div>
)

export default Header
