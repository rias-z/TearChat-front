import React from 'react'


const Header = (props) => (
  <div className='Header'>
    ユーザ名[{props.userName}]
    <input type='button' onClick={props.onClick} value='logout' />
    <hr />
  </div>
)

export default Header
