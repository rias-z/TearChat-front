import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'

// containers
import Admin from './containers/Admin'
import App from './containers/App'


const store = createStore(
  reducer,
  applyMiddleware(thunk),
)

ReactDOM.render(
  (
    <Provider store={store}>
      <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/admin' component={Admin} />
            <Route path='/' component={App} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  ),
  document.getElementById('root')
)
