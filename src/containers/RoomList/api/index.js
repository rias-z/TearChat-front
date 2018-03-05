import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiGetOmittedRooms = async (token) => {
  /** Roomの簡易情報を取得する
   *  Returns:
   *    roomId:   (int)
   *    roomName: (str)
   *    capacity: (int)
   *    status:   (str)
   *    kpName:   (str)
   */
  const res = await request
    .get(endpoint + '/room/get/omitted')
    .set({ Authorization: token })

  return res.body
}

export const apiEnterRoom = async (token, roomId) => {
  /** 選択したRoomに参加者登録する
   *  Returns:
   *    Ok: 特に何もしない
   *    200: 参加可能
   *  Exception: throwを発生させる
   *    401: Unauthorized
   *    500: 参加不可
   */
  await request
    .post(endpoint + '/room/enter')
    .set({ Authorization: token })
    .send({ roomId: roomId })
}
