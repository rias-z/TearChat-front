import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// containers
import Login from '../../containers/Login'
import Lobby from '../../containers/Lobby'
import MakePc from '../../containers/MakePc'
import Register from '../../containers/Register'
import Session from '../../containers/Session'


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
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>

            {(() => {
              if ( this.props.is_authenticated ) {
                return (
                  <Switch>
                    <Route exact path='/' component={Lobby}/>
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

export default App
