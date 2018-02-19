import { successInitializedRoomInfo } from './action'
import { logout } from '../App/action'
import { apiGetRoomInfoById } from './api'
import { clientTokenCheck } from '../../helpers/utils'


export const initializedRoomInfo = (props) => async (dispatch) => {
  try {
    // roomIdをlocalStorageから取得
    const roomId = localStorage.getItem('roomId')

    // roomIdがない場合，Lobbyに遷移
    if (!roomId) {
      props.history.push('/')
      return
    }

    const token = clientTokenCheck()

    const roomInfo = await apiGetRoomInfoById(token, roomId)
    dispatch(successInitializedRoomInfo(roomInfo))
  } catch (err) {
    const statusCode = err.status

    if (statusCode === 401) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}
