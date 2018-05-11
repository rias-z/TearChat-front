import React from 'react'
import { connect } from 'react-redux'

// action
import { addTable, removeTable } from '../Table/action'


const SideBarForKp = (props) => {
  const { addTable, removeTable } = props
  const {
    membersInfo,
    activeUsers,
    ids,
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

  const privateChannels = membersInfo.map((member) => {
    const channel = 'private_' + member.channelId

    // ユーザのアクティブ状態を表示
    const isActive = activeUsers.findIndex(fkUserId =>
      fkUserId === member.fkUserId) >= 0

    const activeIcon = (isActive) ? (
      <span>(A)</span>
    ) : (
      <span>(_)</span>
    )

    // idsチェック
    if (ids.indexOf(channel) === -1) {
      // idsにない場合
      return (
        <li
          key={member.channelId}
          onClick={(e) => {
            e.preventDefault()
            const id = 'private_' + member.channelId
            addTable(id)
          }}
        >
          {activeIcon} [x] {member.userName}
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
            removeTable(id)
          }}
        >
          {activeIcon} [=] {member.userName}
        </li>
      )
    }
  })

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
  membersInfo: state.Session.membersInfo,
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
