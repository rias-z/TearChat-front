import styled from 'styled-components'


export const WrapRoomPcView = styled.header`
  display: flex;
  position: fixed;
  z-index: 400;
  top: calc(100% - 12rem);
  left: 13rem;
  right: 0;
  bottom: 0;
  width: calc(100% - 13rem);
  height: 12rem;
  background-color: CadetBlue;
  color: white;
  overflow: scroll;
`

export const StyledPcBox = styled.div`
  flex-shrink: 0;
  width: 10rem;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: palevioletred;
`
