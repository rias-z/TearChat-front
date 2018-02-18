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
    const statusCode = err.status

    if (statusCode === 401) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}

export const handleEnteredRoomSubmit = (props, inputRoomId) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    // ここではRoomに参加者として登録するだけ
    await apiEnterRoom(token, inputRoomId)

    localStorage.setItem('roomId', inputRoomId)
    props.history.push('/session')
  } catch (err) {
    const statusCode = err.status

    if (statusCode === 401) {
      localStorage.clear()
      dispatch(logout())
    } else {
      // Room参加不可のエラーを細分化する
      dispatch(failedEnteredRoom('failed enter room'))
    }
  }
}
