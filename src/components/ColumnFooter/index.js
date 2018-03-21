import React from 'react'
import styled from 'styled-components'


export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const Footer = styled.div`
  display: flex;
  position: relative;
  z-index: 200;
  width: 100%;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  background: #31394a;
  color: #e1e8ed;
  text-align: center;
`


export default function ColumnFooter({ children }) {
  const handleMove = (e) => {
    e.stopPropagation()
  }

  return (
    <Wrap onMouseDown={handleMove} onTouchStart={handleMove}>
      <Footer>
        {children}
      </Footer>
    </Wrap>
  )
}
