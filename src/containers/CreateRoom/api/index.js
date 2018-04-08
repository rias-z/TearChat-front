import request from 'superagent'


import { API_ENDPOINT } from '../../../config/config'


export const apiCreateRoom = async (token, roomInfo) => {
  /**
   * Roomを作成する
   * @param {string}  token アクセストークン
   * @param {Object}  roomInfo 作成部屋情報
   *
   * @return {int} roomId
   */
  const res = await request
    .post(API_ENDPOINT + '/room/create')
    .set({ Authorization: token })
    .send({ roomInfo: roomInfo })

  return res.body
}
