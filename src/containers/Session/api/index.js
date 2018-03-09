import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiGetRoomInfoById = async (token, roomId) => {
  /**
   * Roomの情報を取得する
   * @params {string}  token  アクセストークン
   * @params {int}  roomId
   * @return {Object}  res.body  部屋情報
   */
  const res = await request
    .post(endpoint + '/room/get/info')
    .set({ Authorization: token })
    .send({ roomId: roomId })

  return res.body
}

export const apiGetPublicMessage = async (token, roomId) => {
  const res = await request
    .post(endpoint + '/message/get/public')
    .set({ Authorization: token })
    .send({ roomId: roomId })

  return res.body
}

export const apiGetPrivateMessage = async (token, roomId) => {
  const res = await request
    .post(endpoint + '/message/get/private')
    .set({ Authorization: token })
    .send({ roomId: roomId })

  return res.body
}
