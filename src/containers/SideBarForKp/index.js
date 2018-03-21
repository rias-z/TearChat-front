import React from 'react'
import { connect } from 'react-redux'
import { Wrap } from './styles'

// action
import { addTable, removeTable } from '../Table/action'


const SideBarForKp = (props) => {
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

  const privateChannels = props.membersInfo.map((member) => {
    const channel = 'private_' + member.channelId

    // idsチェック
    if (props.ids.indexOf(channel) === -1) {
      // idsにない場合
      return (
        <li
          key={member.channelId}
          onClick={(e) => {
            e.preventDefault()
            const id = 'private_' + member.channelId
            props.addTable(id)
          }}
        >
          [x] {member.userName}
        </li>
      )
    } else {
      // idsにある場合
      return (
        <li
          key={member.channelId}
          onClick={(e) => {
            e.preventDefault()
            const id = 'private_' + member.channelId
            props.removeTable(id)
          }}
        >
          [=] {member.userName}
        </li>
      )
    }
  })

  const activeUsers = props.activeUsers.map((user) => (
    <li key={user.userId}>{user.userName}</li>
  ))

  return (
    <Wrap>
      <h3>SideBarForKp</h3>

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
  ids: state.Table.ids,
})

const mapDispatchToProps = (dispatch) => ({
  addTable: (id) => dispatch(addTable(id)),
  removeTable: (id) => dispatch(removeTable(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBarForKp)
