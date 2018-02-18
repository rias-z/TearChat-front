import { successInitializedRoomInfo } from './action'
import { logout } from '../App/action'
import { apiGetRoomInfoById } from './api'
import { clientTokenCheck } from '../../helpers/utils'


export const initializedRoomInfo = (props) => async (dispatch) => {
  try {
    // room_idをlocalStorageから取得
    const room_id = localStorage.getItem('room_id')

    // room_idがない場合，Lobbyに遷移
    if (!room_id) {
      props.history.push('/')
      return
    }

    const token = clientTokenCheck()

    const room_info = await apiGetRoomInfoById(token, room_id)
    dispatch(successInitializedRoomInfo(room_info))
  } catch (err) {
    const status_code = err.status

    if ( status_code === 401 ) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}
