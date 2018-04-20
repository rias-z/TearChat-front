import React from 'react'

import { statusAsset } from '../../config/statusAsset'

// styles
import { Input, Table, Th, Td } from './styles'


const StatusTable = (props) => {
  const { statusPcInfo } = props
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
            value={statusPcInfo[status.name].point}
            readOnly={status.readonly && true}
            colorTheme={status.readonly && '#cccccc'}
            onChange={onChangeValue}
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
            defaultValue={statusPcInfo[status.name].totalPoint}
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
