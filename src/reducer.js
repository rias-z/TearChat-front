import { combineReducers } from 'redux'
import App from './containers/App/reducer'
import ColumnPc from './containers/ColumnPc/reducer'
import CreateRoom from './containers/CreateRoom/reducer'
import ManagerPc from './containers/ManagerPc/reducer'
import RoomPcView from './containers/RoomPcView/reducer'
import Register from './containers/Register/reducer'
import RoomList from './containers/RoomList/reducer'
import Session from './containers/Session/reducer'
import Table from './containers/Table/reducer'
import ColumnPublicMessage from './containers/ColumnPublicMessage/reducer'


export default combineReducers({
  App,
  ColumnPc,
  CreateRoom,
  ManagerPc,
  RoomPcView,
  Register,
  RoomList,
  Session,
  Table,
  ColumnPublicMessage,
})
