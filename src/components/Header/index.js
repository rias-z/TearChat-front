import React from 'react'
import { Wrap } from './styles'


const Header = (props) => (
  <Wrap>
    <div className='Header'>
      ユーザ名[{props.userName}]
      <input type='button' onClick={props.onClick} value='logout' />
    </div>
  </Wrap>
)

export default Header
