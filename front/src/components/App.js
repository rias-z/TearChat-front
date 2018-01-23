import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Lobby from './Lobby'
import Session from './Session'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>

        <ul>
          <li><Link to='/'>root</Link></li>
          <li><Link to='/register'>register</Link></li>
          <li><Link to='/lobby'>lobby</Link></li>
          <li><Link to='/session'>session</Link></li>
        </ul>
        <hr />

        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/lobby' component={Lobby} />
          <Route path='/session' component={Session} />
        </Switch>
      </div>
    )
  }
}


export default App
