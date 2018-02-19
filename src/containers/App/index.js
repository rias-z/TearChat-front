import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// containers
import CreateRoom from '../CreateRoom'
import Login from '../Login'
import Lobby from '../Lobby'
import MakePc from '../MakePc'
import Register from '../Register'
import Session from '../Session'

// components
import Header from '../../components/Header'

// logic
import { initializedApp, logoutApp } from './logic'


class App extends Component {
  componentWillMount() {
    this.props.initializedApp()
  }

  render() {
    if (this.props.isTokenChecked) {
      return (
        <div className='App'>
          <Header onClick={(e) => {
            e.preventDefault()
            this.props.logoutApp()
          }}
          />

          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />

            {(() => {
              if (this.props.isAuthenticated) {
                return (
                  <Switch>
                    <Route exact path='/' component={Lobby} />
                    <Route path='/create_room' component={CreateRoom} />
                    <Route path='/make_pc' component={MakePc} />
                    <Route path='/session' component={Session} />
                  </Switch>
                )
              } else {
                return (
                  <Redirect to='/login' />
                )
              }
            })()}
          </Switch>
        </div>
      )
    } else {
      return (
        <div className='App'>
          Loading...
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isTokenChecked: state.App.isTokenChecked,
  isAuthenticated: state.App.isAuthenticated,
  userId: state.App.userId,
  userName: state.App.userName
})

const mapDispatchToState = (dispatch) => ({
  initializedApp: () => dispatch(initializedApp()),
  logoutApp: () => dispatch(logoutApp())
})

export default connect(
  mapStateToProps,
  mapDispatchToState
)(App)
