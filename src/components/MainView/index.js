import styled from 'styled-components'


const MainView = styled.div`
  position: fixed;
  top: 2rem;
  left: 13rem;
  width: calc(100% - 13rem);
  height: calc(100% - 14rem);
  // PcViewを閉じている場合
  // height: 100%;
  background-color: #222426;
  overflow-x: scroll;
`

export default MainView
