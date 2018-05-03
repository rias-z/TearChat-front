import React from 'react'

// styles
import { Input, Table, Td } from './styles'


const CurrentStatusTable = (props) => {
  const { editPcInfo } = props
  const { onChangeValue } = props

  const renderCurrentStatusTableBody = () => {
    return (
      <tbody>
        <tr>
          <Td>現在HP値</Td>
          <Td>
            <Input
              type='text'
              name='status_hp_currentPoint'
              onChange={onChangeValue}
              value={editPcInfo.status.hp.currentPoint}
            />
          </Td>
          <Td width='10px'>/</Td>
          <Td>
            <Input
              type='text'
              name='status_hp_totalPoint'
              readOnly
              colorTheme='#cccccc'
              value={editPcInfo.status.hp.totalPoint}
            />
          </Td>
        </tr>
        <tr>
          <Td>現在MP値</Td>
          <Td>
            <Input
              type='text'
              name='status_mp_currentPoint'
              onChange={onChangeValue}
              value={editPcInfo.status.mp.currentPoint}
            />
          </Td>
          <Td width='10px'>/</Td>
          <Td>
            <Input
              type='text'
              name='status_mp_totalPoint'
              readOnly
              colorTheme='#cccccc'
              value={editPcInfo.status.mp.totalPoint}
            />
          </Td>
        </tr>
        <tr>
          <Td>現在SAN値</Td>
          <Td>
            <Input
              type='text'
              name='status_san_currentPoint'
              onChange={onChangeValue}
              value={editPcInfo.status.san.currentPoint}
            />
          </Td>
          <Td width='10px'>/</Td>
          <Td>
            <Input
              type='text'
              name='status_san_totalPoint'
              readOnly
              colorTheme='#cccccc'
              value={editPcInfo.status.san.totalPoint}
            />
          </Td>
        </tr>
      </tbody>
    )
  }

  return (
    <div className='statusTable'>
      <h3>現在ステータス</h3>
        <Table name='status'>
          {renderCurrentStatusTableBody()}
        </Table>
    </div>
  )
}

export default CurrentStatusTable
