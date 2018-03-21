import React from 'react'
import styled from 'styled-components'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'


export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const Header = styled.div`
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
  cursor: pointer;
`

export const Item = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`
  color: #e1e8ed;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 1rem;
  font-size: 1rem;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`

const ColumnHeader = (props) => {
  const { onClose, name } = props

  return (
    <Wrap>
      <Header>
        <Title>{name}</Title>
        <Item onClick={onClose}>
          <IconButton>
            <NavigationClose color='#999999' />
          </IconButton>
        </Item>
      </Header>
    </Wrap>
  )
}

export default ColumnHeader
