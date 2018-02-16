import { successEnteredRoom, failedEnteredRoom } from '../Session/action'

import { apiEnterRoom } from './api'


export const handleEnteredRoomSubmit = (props, input_room_id) => async (dispatch) => {
  // ここではRoomに参加者として登録するだけ
  const result = await apiEnterRoom(input_room_id)

  if ( result ) {

    // 参加可能の場合
    dispatch(successEnteredRoom())
    props.history.push('/session')
  } else {
    // errorMessageを表示する（人数過多など）
    dispatch(failedEnteredRoom())
  }
}

