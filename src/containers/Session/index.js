import React, { Component } from 'react'
import { connect } from 'react-redux'

// containers
import SideBarManager from '../SideBarManager'
import PcView from '../PcView'
import Table from '../Table'

// components
import MainView from '../../components/MainView'

// logic
import { initializedRoomInfo } from './logic'


class Session extends Component {
  componentWillMount() {
    // 部屋情報初期化
    this.props.initializedRoomInfo(this.props)
  }

  componentWillUnmount() {
    if (this.props.socket) {
      // 部屋退出時，socketをdisconnectする
      this.props.socket.disconnect()
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className='Session'>
          <SideBarManager />
          <MainView>
              <Table />
          </MainView>
          <PcView />
        </div>
      )
    } else {
      return (
        <div className='Session'>
          Loading...
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.Session.isLoading,
  roomId: state.Session.roomId,
  roomName: state.Session.roomName,
  socket: state.Session.socket,
  kpInfo: state.Session.kpInfo,
  membersInfo: state.Session.membersInfo,
  activeUsers: state.Session.activeUsers,
  isKp: state.Session.isKp,
})

const mapDispatchToProps = (dispatch) => ({
  initializedRoomInfo: () => dispatch(initializedRoomInfo()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)
