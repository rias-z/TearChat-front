import React from 'react'
import { connect } from 'react-redux'
import { Wrap } from './styles'

// containers
import PcDialog from '../PcDialog'
import OperationPc from '../OperationPc'
import OperationDiceDisplay from '../OperationDiceDisplay'

// action
import { addTable, removeTable } from '../Table/action'


const SideBarForMember = (props) => {
  const { addTable, removeTable } = props
  const {
    activeUsers,
    ids,
    kpInfo,
    roomName,
    selfChannelId,
  } = props

  const publicChannels = (ids.indexOf('public') === -1) ? (
    <li
      onClick={(e) => {
        e.preventDefault()
        addTable('public')
      }}
    >
      [x]
    </li>
  ) : (
    <li
      onClick={(e) => {
        e.preventDefault()
        removeTable('public')
      }}
    >
      [=]
    </li>
  )

  // ユーザのアクティブ状態を表示
  const isActive = activeUsers.findIndex(fkUserId =>
    fkUserId === kpInfo.fkUserId) >= 0

  const activeIcon = (isActive) ? (
    <span>(A)</span>
  ) : (
    <span>(_)</span>
  )

  const channel = 'private_' + selfChannelId
  const privateChannels = (ids.indexOf(channel) === -1) ? (
    <li
      onClick={(e) => {
        e.preventDefault()
        addTable(channel)
      }}
    >
      {activeIcon} [x] {kpInfo.userName} (KP)
    </li>
  ) : (
    <li
      onClick={(e) => {
        e.preventDefault()
        removeTable(channel)
      }}
    >
      {activeIcon} [=] {kpInfo.userName} (KP)
    </li>
  )

  return (
    <Wrap>
      <h3>{roomName}</h3>

      <div>
        部屋情報<br />
        KP: {kpInfo.userName}<br />
      </div>

      <br />

      PublicChannels:<br />
      {publicChannels}<br />

      PrivateChannels:<br />
      {privateChannels}<br />

      <br />

      <PcDialog />

      <OperationPc />

      <OperationDiceDisplay />
    </Wrap>
  )
}

const mapStateToProps = (state) => ({
  activeUsers: state.Session.activeUsers,
  kpInfo: state.Session.kpInfo,
  roomName: state.Session.roomName,
  selfChannelId: state.Session.selfChannelId,
  ids: state.Table.ids,
})

const mapDispatchToProps = (dispatch) => ({
  addTable: (id) => dispatch(addTable(id)),
  removeTable: (id) => dispatch(removeTable(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBarForMember)
