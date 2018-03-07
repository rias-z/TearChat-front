import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiGetOmittedRooms = async (token) => {
  /**
   * Roomの簡易情報を取得する
   * @params {string}  token アクセストークン
   * @return {Object}  res.body  部屋情報
   */
  const res = await request
    .get(endpoint + '/room/get/omitted')
    .set({ Authorization: token })

  return res.body
}

export const apiEnterRoom = async (token, roomId) => {
  /**
   * 選択したRoomに参加者登録する
   * @params {string}  token  アクセストークン
   * @params {int}  roomId
   * @return
   *  200: 参加可能
   *  401: Unauthorized
   *  500: 参加不可
   */
  await request
    .post(endpoint + '/room/enter')
    .set({ Authorization: token })
    .send({ roomId: roomId })
}
