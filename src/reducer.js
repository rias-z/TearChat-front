import { combineReducers } from 'redux'
import Admin from './containers/Admin/reducer'
import App from './containers/App/reducer'
import CreateRoom from './containers/CreateRoom/reducer'
import ManagerPc from './containers/ManagerPc/reducer'
import OperationPc from './containers/OperationPc/reducer'
import RoomPcView from './containers/RoomPcView/reducer'
import Register from './containers/Register/reducer'
import RoomList from './containers/RoomList/reducer'
import Session from './containers/Session/reducer'
import Table from './containers/Table/reducer'
import ColumnPublicMessage from './containers/ColumnPublicMessage/reducer'


export default combineReducers({
  Admin,
  App,
  CreateRoom,
  ManagerPc,
  RoomPcView,
  Register,
  RoomList,
  OperationPc,
  Session,
  Table,
  ColumnPublicMessage,
})
