import { successGetOmittedRooms, failedEnteredRoom } from './action'
import { logout } from '../App/action'
import { apiGetOmittedRooms, apiEnterRoom } from './api'
import { clientTokenCheck } from '../../helpers/utils'


// Roomの簡易情報を取得
export const initializedOmittedRooms = () => async (dispatch) => {
  try {
    const token = clientTokenCheck()
    const result = await apiGetOmittedRooms(token)

    dispatch(successGetOmittedRooms(result))
  } catch (err) {
    const status_code = err.status

    if ( status_code === 401 ) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}

export const handleEnteredRoomSubmit = (props, input_room_id) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    // ここではRoomに参加者として登録するだけ
    await apiEnterRoom(token, input_room_id)

    localStorage.setItem('room_id', input_room_id)
    props.history.push('/session')
  } catch (err) {
    const status_code = err.status

    if ( status_code === 401 ) {
      localStorage.clear()
      dispatch(logout())
    } else {
      // Room参加不可のエラーを細分化する
      dispatch(failedEnteredRoom('failed enter room'))
    }
  }
}
