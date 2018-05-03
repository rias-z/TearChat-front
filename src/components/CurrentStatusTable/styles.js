import styled from 'styled-components'

export const Input = styled.input`
  width: 50px;
  height: 26px;
  text-align: right;
  background-color: ${props => props.colorTheme}
`

export const Table = styled.table`
  table-layout: fixed;
  width: 200px;
  border-collapse: collapse;
  border: 1px solid #bbbbbb;
`

export const Td = styled.td.attrs({
  width: props => props.width || '40px'
})`
  width: ${props => props.width};
  height: 40px;
  border: 1px solid #bbbbbb;
`
