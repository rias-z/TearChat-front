import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
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
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
