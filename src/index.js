import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'

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
          <Route path='/' component={App} />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  ),
  document.getElementById('root')
)
