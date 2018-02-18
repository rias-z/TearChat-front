import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

import App from './containers/App'


const devtool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    devtool
  )
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
