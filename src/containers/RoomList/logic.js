import { successGetOmittedRooms } from './action'
import { apiGetOmittedRooms, apiEnterRoom } from './api'


// Roomの簡易情報を取得
export const initializedOmittedRooms = () => async (dispatch) => {
  const result = await apiGetOmittedRooms()

  if ( !result ) {
    return
  }
  dispatch(successGetOmittedRooms(result))
}

export const handleEnteredRoomSubmit = async (props, input_room_id) => {
  // ここではRoomに参加者として登録するだけ
  const result = await apiEnterRoom(input_room_id)

  // 参加不可の場合
  if ( !result ) {
    return
  }

  localStorage.setItem('room_id', input_room_id)
  props.history.push('/session')
}
