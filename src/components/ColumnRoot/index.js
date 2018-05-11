import React from 'react'
import styled from 'styled-components'


const View = styled.div`
  width: 100%;
  height: calc(100% - 0.5rem);
  margin: 0;
  border: 2px solid #444448;
  background: #3e3e45;
  color: #e1e8ed;
  overflow-y: hidden;
`

export default function ColumnRoot({ children }) {
  return <View>{children}</View>
}
