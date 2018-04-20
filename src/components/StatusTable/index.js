import React from 'react'

import { statusAsset } from '../../config/statusAsset'

// styles
import { Input, Table, Th, Td } from './styles'


const StatusTable = (props) => {
  const { editPcInfo } = props
  const { onChangeValue } = props

  const renderStatusTableHeader = () => {
    const statusTHeader = statusAsset.map(status => {
      return (
        <Th key={status.name}>
          {status.displayName}
        </Th>
      )
    })

    return (
      <thead>
        <tr>
          <Th />
          {statusTHeader}
        </tr>
      </thead>
    )
  }

  const renderStatusTableBody = () => {
    const pointFrame = statusAsset.map(status => {
      return (
        <Td key={status.name}>
          <Input
            type='text'
            name={'status_' + status.name + '_point'}
            readOnly={status.readonly && true}
            colorTheme={status.readonly && '#cccccc'}
            onChange={onChangeValue}
            value={editPcInfo.status[status.name].point || ''}
          />
        </Td>
      )
    })

    const modifyFrame = statusAsset.map(status => {
      return (
        <Td key={'status_' + status.name + '_point'}>
          <Input
            type='text'
            name={'status_' + status.name + '_modifyPoint'}
            onChange={onChangeValue}
            value={editPcInfo.status[status.name].modifyPoint || ''}
          />
        </Td>
      )
    })

    const totalFrame = statusAsset.map(status => {
      return (
        <Td key={status.name}>
          <Input
            type='text'
            name={'status_' + status.name + 'totalPoint'}
            readOnly
            colorTheme='#cccccc'
            value={editPcInfo.status[status.name].totalPoint}
          />
        </Td>
      )
    })

    return (
      <tbody>
        <tr>
          <Td>能力値</Td>
          {pointFrame}
        </tr>
        <tr>
          <Td>修正値</Td>
          {modifyFrame}
        </tr>
        <tr>
          <Td>合計値</Td>
          {totalFrame}
        </tr>
      </tbody>
    )
  }

  return (
    <div className='statusTable'>
      <h3>ステータス</h3>
        <Table name='status'>
          {renderStatusTableHeader()}
          {renderStatusTableBody()}
        </Table>
    </div>
  )
}

export default StatusTable
