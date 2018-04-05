import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiCreateRoom = async (token, roomInfo) => {
  /**
   * Roomを作成する
   * @param {string}  token アクセストークン
   * @param {Object}  roomInfo 作成部屋情報
   *
   * @return {int} roomId
   */
  const res = await request
    .post(endpoint + '/room/create')
    .set({ Authorization: token })
    .send({ roomInfo: roomInfo })

  return res.body
}
