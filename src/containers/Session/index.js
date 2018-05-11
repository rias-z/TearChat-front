import React, { Component } from 'react'
import { connect } from 'react-redux'

// containers
import SideBarManager from '../SideBarManager'
import RoomPcView from '../RoomPcView'
import Table from '../Table'

// components
import MainView from '../../components/MainView'

// logic
import { initializedRoomInfo, leaveSession } from './logic'


class Session extends Component {
  componentWillMount() {
    // 部屋情報初期化
    this.props.initializedRoomInfo(this.props)
  }

  componentWillUnmount() {
    const { socket } = this.props

    // 部屋退出時，socketをdisconnectする
    if (socket) {
      socket.disconnect()

      // stateを初期化
      this.props.leaveSession()
    }
  }

  render() {
    const { isLoading } = this.props

    if (isLoading) {
      return (
        <div className='Session'>
          <SideBarManager />
          <MainView>
              <Table />
          </MainView>
          <RoomPcView />
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
  socket: state.Session.socket,
})

const mapDispatchToProps = (dispatch, getState) => ({
  initializedRoomInfo: () => dispatch(initializedRoomInfo(getState)),
  leaveSession: () => dispatch(leaveSession()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)
