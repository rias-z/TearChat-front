import React from 'react'

import { statusAsset } from '../../config/statusAsset'

// styles
import { Input, Table, Tbody, Th, Td } from './styles'


const StatusTable = (props) => {
  const { makePcInfo } = props
  const { onChangeValue } = props

  const renderStatusTableHeader = () => {
    const statusTHeader = statusAsset.map(status => {
      return (
        <Th key={status.name}>{status.displayName}</Th>
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
    const inputFrame = statusAsset.map(status => {
      if (!status.readonly) {
        return (
          <Td key={status.name}>
            <Input
              type='text'
              name={'status_' + status.name + '_point'}
              onChange={onChangeValue}
            />
          </Td>
        )
      } else {
        const value = makePcInfo.status[status.name].point

        return (
          <Td key={status.name}>
            <Input
              type='text'
              name={'status_' + status.name + '_point'}
              readOnly
              colorTheme='#cccccc'
              value={value}
            />
          </Td>
        )
      }
    })

    const modifyFrame = statusAsset.map(status => {
      return (
        <Td key={'status_' + status.name}>
          <Input
            type='text'
            name={'status_' + status.name + '_modifyPoint'}
            onChange={onChangeValue}
          />
        </Td>
      )
    })

    const totalFrame = statusAsset.map(status => {
      const total = makePcInfo.status[status.name].totalPoint

      return (
        <Td key={status.name}>
          <Input
            type='text'
            name={'status_' + status.name + 'totalPoint'}
            readonly='readonly'
            colorTheme='#cccccc'
            value={total}
          />
        </Td>
      )
    })

    return (
      <Tbody>
        <tr>
          <Td>能力値</Td>
          {inputFrame}
        </tr>
        <tr>
          <Td>修正値</Td>
          {modifyFrame}
        </tr>
        <tr>
          <Td>合計値</Td>
          {totalFrame}
        </tr>
      </Tbody>
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
