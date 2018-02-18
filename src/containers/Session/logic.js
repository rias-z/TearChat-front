import { successInitializedRoomInfo } from './action'

import { apiGetRoomInfoById } from './api'


export const initializedRoomInfo = (props) => async (dispatch) => {
  // room_idをlocalStorageから取得
  const room_id = localStorage.getItem('room_id')

  // room_idがない場合，Lobbyに遷移
  if ( !room_id ) {
    props.history.push('/')
    return
  }

  const room_info = await apiGetRoomInfoById(room_id)
  dispatch(successInitializedRoomInfo(room_info))
}


