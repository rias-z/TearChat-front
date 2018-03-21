import React from 'react'
import { connect } from 'react-redux'
import { Wrap } from './styles'

// action
import { addTable, removeTable } from '../Table/action'


const SideBarForMember = (props) => {
  const publicChannels = (props.ids.indexOf('public') === -1) ? (
    <li
      onClick={(e) => {
        e.preventDefault()
        props.addTable('public')
      }}
    >
      [x]
    </li>
  ) : (
    <li
      onClick={(e) => {
        e.preventDefault()
        props.removeTable('public')
      }}
    >
      [=]
    </li>
  )

  const channel = 'private_' + props.selfChannelId
  const privateChannels = (props.ids.indexOf(channel) === -1) ? (
    <li
      onClick={(e) => {
        e.preventDefault()
        props.addTable(channel)
      }}
    >
      [x] {props.kpInfo.userName} (KP)
    </li>
  ) : (
    <li
      onClick={(e) => {
        e.preventDefault()
        props.removeTable(channel)
      }}
    >
      [=] {props.kpInfo.userName} (KP)
    </li>
  )

  const activeUsers = props.activeUsers.map((user) => (
    <li key={user.userId}>{user.userName}</li>
  ))

  return (
    <Wrap>
      <h3>SideBarForMember</h3>
      Room [{props.roomId}]<br />
      {props.roomName}<br />
      <br />
      kpName: {props.kpInfo.userName}<br />
      isKp: {props.isKp.toString()}<br />
      <br />
      ActiveUsers:<br />
      {activeUsers}
      <br />
      PublicMessages:<br />
      {publicChannels}
      <br />
      PrivateMessage:<br />
      {privateChannels}
      <br />
      GroupMessage:<br />
      <li>Group1 (CLOSE)</li>
      <li>Group2 (CLOSE)</li>
      <br />
    </Wrap>
  )
}

const mapStateToProps = (state) => ({
  roomId: state.Session.roomId,
  roomName: state.Session.roomName,
  kpInfo: state.Session.kpInfo,
  membersInfo: state.Session.membersInfo,
  activeUsers: state.Session.activeUsers,
  isKp: state.Session.isKp,
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
