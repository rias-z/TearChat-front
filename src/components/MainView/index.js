import styled from 'styled-components'


const MainView = styled.div`
  position: absolute;
  top: 2rem;
  left: 13rem;
  width: 100%;
  height: calc(100% - 14rem);
  // PcViewを閉じている場合
  // height: 100%;
  overflow-y: hidden;
  background-color: #222426;
`

export default MainView
