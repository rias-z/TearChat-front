import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiCreateRoom = async (token, roomObj) => {
  /**
   * 部屋を作成する
   * @param {string}  token アクセストークン
   * @param {Object}  roomObj 作成部屋情報
   * @return {Object} res.body  部屋情報
   */
  const res = await request
    .post(endpoint + '/room/create')
    .set({ Authorization: token })
    .send({ roomObj })

  return res.body
}
