import request from 'superagent'


import { API_ENDPOINT } from '../../../config/config'


export const apiGetUserInfoById = async (token) => {
  const res = await request
    .get(API_ENDPOINT + '/user/get')
    .set({ Authorization: token })

  return res.body
}

export const apiGetRoomInfoById = async (token, roomId) => {
  /**
   * Roomの情報を取得する
   * @params {string}  token  アクセストークン
   * @params {int}  roomId
   * @return {Object}  res.body  部屋情報
   */
  const res = await request
    .post(API_ENDPOINT + '/room/get/info')
    .set({ Authorization: token })
    .send({ roomId: roomId })

  return res.body
}

export const apiGetPublicMessage = async (token, roomId) => {
  const res = await request
    .post(API_ENDPOINT + '/message/get/public')
    .set({ Authorization: token })
    .send({ roomId: roomId })

  return res.body
}

export const apiGetPrivateMessage = async (token, roomId) => {
  const res = await request
    .post(API_ENDPOINT + '/message/get/private')
    .set({ Authorization: token })
    .send({ roomId: roomId })

  return res.body
}
