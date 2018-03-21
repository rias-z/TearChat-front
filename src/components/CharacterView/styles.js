import styled from 'styled-components'

export const Wrap = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 400;
  top: calc(100% - 12rem);
  left: 13rem;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: CadetBlue;
  color: white;
  padding: 0 1rem;
  overflow-x: scroll;
`
