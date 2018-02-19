import { combineReducers } from 'redux'
import App from './containers/App/reducer'
import CreateRoom from './containers/CreateRoom/reducer'
import RoomList from './containers/RoomList/reducer'
import Session from './containers/Session/reducer'


export default combineReducers({
  App,
  CreateRoom,
  RoomList,
  Session
})
