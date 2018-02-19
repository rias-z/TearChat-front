import { apiCreateRoom } from './api'
import { failedCreateRoom } from './action'
import { logout } from '../App/action'
import { clientTokenCheck } from '../../helpers/utils'


export const handleCreateRoomSubmit = (props, formRoomInfo) => async (dispatch) => {
  try {
    const roomName = formRoomInfo.roomName.value
    const participantsNumber = formRoomInfo.participantsNumber.value

    // バリデーションチェック
    if (!roomName || !participantsNumber) {
      dispatch(failedCreateRoom('input required field!'))
      return
    }

    const roomObj = {
      roomName: roomName,
      participantsNumber: participantsNumber
    }

    const token = clientTokenCheck()

    const result = await apiCreateRoom(token, roomObj)

    // Room作成成功時，ユーザはSession画面に遷移
    localStorage.setItem('roomId', result.roomId)
    props.history.push('/session')
  } catch (err) {
    const statusCode = err.status

    if (statusCode === 401) {
      localStorage.clear()
      dispatch(logout())
    } else {
      dispatch(failedCreateRoom('failed create'))
    }
  }
}
