import React, { Component } from 'react'
import { connect } from 'react-redux'

// container
import PublicChat from '../PublicChat'

// containers
import { initializedRoomInfo } from './logic'


class Session extends Component {
  componentWillMount() {
    this.props.initializedRoomInfo()
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className='Session'>
          [{this.props.roomId}] 部屋の名前: {this.props.roomName}
          <br /><br />
          参加者
          {this.props.participateUsers.map(user => {
            return (
              <div key={user.userId}>
                [{user.userId}] {user.userName}
              </div>
            )
          })}

          <PublicChat />
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
  participateUsers: state.Session.participateUsers
})

const mapDispatchToProps = (dispatch, getState) => ({
  initializedRoomInfo: () => dispatch(initializedRoomInfo(getState))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)
