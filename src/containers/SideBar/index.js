import React from 'react'
import { connect } from 'react-redux'
import { Wrap } from './styles'

// action
import { addTable, removeTable } from "../Table/action";


class SideBar extends React.Component {
  render() {
    const publicChannels = (this.props.ids.indexOf('public') === -1) ?
      <li
        onClick={(e) => {
          e.preventDefault()
          this.props.addTable('public')
        }}
      >[x]</li>
      :
      <li
        onClick={(e) => {
          e.preventDefault()
          this.props.removeTable('public')
        }}
      >[>]</li>

    const privateChannels = this.props.membersInfo.map((member, idx) => {
      const channel = 'private_' + member.channelId

      // idsチェック
      if (this.props.ids.indexOf(channel) === -1) {
        // idsにない場合
        return (
          <li
            key={idx}
            onClick={(e) => {
              e.preventDefault()
              const id = 'private_' + member.channelId
              this.props.addTable(id)
            }}
          >
            [x] {member.userName}
          </li>
        )
      } else {
        // idsにある場合
        return (
          <li
            key={idx}
            onClick={(e) => {
              e.preventDefault()
              const id = 'private_' + member.channelId
              this.props.removeTable(id)
            }}
          >
            [>] {member.userName}
          </li>
        )
      }
    })

    const activeUsers = this.props.activeUsers.map((user, index) => (
      <li key={index}>{user.userName}</li>
    ))


    return (
      <Wrap>
        <h3>SideBar</h3>

        Room [{this.props.roomId}]<br />
        {this.props.roomName}<br />
        <br />
        kpName: {this.props.kpInfo.userName}<br />
        isKp: {this.props.isKp.toString()}<br />
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
)(SideBar)
