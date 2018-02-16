import { combineReducers } from 'redux'
import App from './containers/App/reducer'
import Lobby from './containers/Lobby/reducer'


export default combineReducers({
  App,
  Lobby
})
