import { combineReducers } from 'redux'
import App from './containers/App/reducer'
import CreateRoom from './containers/CreateRoom/reducer'
import ManagerPc from './containers/ManagerPc/reducer'
import PcView from './containers/PcView/reducer'
import RoomList from './containers/RoomList/reducer'
import Session from './containers/Session/reducer'
import Table from './containers/Table/reducer'
import ColumnPublicMessage from './containers/ColumnPublicMessage/reducer'


export default combineReducers({
  App,
  CreateRoom,
  ManagerPc,
  PcView,
  RoomList,
  Session,
  Table,
  ColumnPublicMessage,
})
