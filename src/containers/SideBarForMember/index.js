import React from 'react'
import { connect } from 'react-redux'

// action
import { addTable, removeTable } from '../Table/action'


const SideBarForMember = (props) => {
  const { addTable, removeTable } = props
  const {
    activeUsers,
    ids,
    kpInfo,
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
    <div>
      PublicChannels:<br />
      {publicChannels}<br />

      PrivateChannels:<br />
      {privateChannels}<br />
    </div>
  )
}

const mapStateToProps = (state) => ({
  activeUsers: state.Session.activeUsers,
  kpInfo: state.Session.kpInfo,
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
