import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiGetOmittedRooms = async (token) => {
  const res = await request
    .get(endpoint + '/room/get/omitted')
    .set({Authorization: token})

  return res.body
}

export const apiEnterRoom = async (token, room_id) => {
  /* 選択したRoomに参加者登録する
   Returns:
     Ok: 特に何もしない
      200: 参加可能
     Exception: throwを発生させる
      401: Unauthorized
      500: 参加不可
   */
  await request
    .post(endpoint + '/room/enter')
    .set({Authorization: token})
    .send({room_id: room_id})
}
