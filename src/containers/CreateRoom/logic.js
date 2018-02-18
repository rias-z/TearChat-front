import { apiCreateRoom } from './api'
import { failedCreateRoom } from './action'
import { logout } from '../App/action'


export const handleCreateRoomSubmit = (props, form_room_info) => async (dispatch) => {
  const room_name = form_room_info.room_name.value
  const participants_number = form_room_info.participants_number.value

  // バリデーションチェック
  if ( !room_name || !participants_number ) {
    dispatch(failedCreateRoom("input required field!"))
    return
  }

  const access_token = localStorage.getItem('access_token')
  if ( !access_token ) {
    dispatch(logout())
    return
  }

  const token = 'Bearer ' + access_token
  const room_obj = {
    room_name: room_name,
    participants_number: participants_number
  }

  const result = await apiCreateRoom(token, room_obj)

  if ( !result ) {
    dispatch(failedCreateRoom("failed create"))
  }

  // Room作成成功時，ユーザはSession画面に遷移
  localStorage.setItem('room_id', result.room_id)
  props.history.push("/session")

}
