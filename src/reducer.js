import { combineReducers } from 'redux'
import App from './containers/App/reducer'
import RoomList from './containers/RoomList/reducer'


export default combineReducers({
  App,
  RoomList
})
