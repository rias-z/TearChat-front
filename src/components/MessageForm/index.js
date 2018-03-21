import React from 'react'
import styled from 'styled-components'


const StyledTextArea = styled.textarea`
  position: fixed;
  width: calc(100% - 0.6rem);
  height: 2.3rem;
  transform: translate(0, -1.3rem);
  border: 2px solid palevioletred;
  border-radius: 6px;
  outline: none;
  font-size: 1rem
  resize: none;
  align-items: center;
`


const MessageForm = (props) => {
  const { onPostMessage } = props

  return (
    <StyledTextArea
      onKeyPress={(e) => {
        if (!e.shiftKey && e.key === 'Enter') {
          const content = e.target.value
          onPostMessage(content)
          e.target.value = ''
        }
      }}
    />
  )
}

export default MessageForm
