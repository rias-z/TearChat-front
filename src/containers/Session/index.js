import React, { Component } from 'react'
import { connect } from 'react-redux'

import { initializedRoomInfo } from './logic'


class Session extends Component {
  componentWillMount() {
    this.props.initializedRoomInfo()
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className='Session'>
          [{this.props.room_id}] 部屋の名前: {this.props.room_name}
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
  room_id: state.Session.room_id,
  room_name: state.Session.room_name
})

const mapDispatchToProps = (dispatch, getState) => ({
  initializedRoomInfo: () => dispatch(initializedRoomInfo(getState))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)
