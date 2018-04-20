import styled from 'styled-components'


export const Input = styled.input`
  width: 50px;
  height: 26px;
  text-align: right;
  background-color: ${props => props.colorTheme}
`

export const Table = styled.table`
  table-layout: fixed;
  width: 450px;
  border-collapse: collapse;
  border: 1px solid #bbbbbb;
`

export const Th = styled.th.attrs({
  // 技能名以外はカラムの幅を小さくする (100px)
  width: props => props.width || '70px'
})`
  width: ${props => props.width};
  height: 40px;
  border: 1px solid #bbbbbb;
  color: #ff8888;
`

export const Td = styled.td`
  height: 40px;
  border: 1px solid #bbbbbb;
`
