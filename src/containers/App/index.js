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


// dispatch
import { apiTokenCheck } from './api'
import { logout } from './action'


class App extends Component {
  componentWillMount(){
    // localStorageからaccess_tokenを取得
    const access_token = localStorage.getItem('access_token')

    // アクセストークンがない場合，ログアウト処理
    if (!access_token){
      localStorage.clear()
      this.props.logout()
    }

    // トークンチェック
    this.props.apiTokenCheck(access_token)
  }

  render() {
    if ( this.props.is_token_checked ) {
      return (
        <div className="App">
          <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>

            {(() => {
              if ( this.props.is_authenticated ) {
                return (
                  <Switch>
                    <Route exact path='/' component={Lobby}/>
                    <Route path='/create_room' component={CreateRoom}/>
                    <Route path='/make_pc' component={MakePc}/>
                    <Route path='/session' component={Session}/>
                  </Switch>
                )
              } else {
                return <Redirect to={'/login'} />
              }
            })()}
          </Switch>
        </div>
      )
    } else {
      return (
        <div className="App">
          Loading...
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => ({
  is_token_checked: state.App.is_token_checked,
  is_authenticated: state.App.is_authenticated,
  user_id: state.App.user_id,
  user_name: state.App.user_name
})

const mapDispatchToState = (dispatch) => ({
  apiTokenCheck: (sessionId) => dispatch(apiTokenCheck(sessionId)),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToState
)(App)
