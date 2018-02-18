import { apiCreateRoom } from './api'
import { failedCreateRoom } from './action'
import { logout } from '../App/action'
import { clientTokenCheck } from '../../helpers/utils'


export const handleCreateRoomSubmit = (props, form_room_info) => async (dispatch) => {
  try {
    const room_name = form_room_info.room_name.value
    const participants_number = form_room_info.participants_number.value

    // バリデーションチェック
    if ( !room_name || !participants_number ) {
      dispatch(failedCreateRoom("input required field!"))
      return
    }

    const room_obj = {
      room_name: room_name,
      participants_number: participants_number
    }

    const token = clientTokenCheck()

    const result = await apiCreateRoom(token, room_obj)

    // Room作成成功時，ユーザはSession画面に遷移
    localStorage.setItem('room_id', result.room_id)
    props.history.push("/session")
  } catch (err) {
    const status_code = err.status

    if (status_code === 401) {
      localStorage.clear()
      dispatch(logout())
    } else {
      dispatch(failedCreateRoom("failed create"))
    }
  }
}
