import React from 'react'
import styled from 'styled-components'


const Body = styled.div`
  height: calc(100% - 10rem);
  padding: 1rem 0.5rem;
`

export default function ColumnBody({ children }) {
  const handleMove = (e) => {
    e.stopPropagation()
  }

  return (
    <Body onMouseDown={handleMove} onTouchStart={handleMove}>
      {children}
    </Body>
  )
}
