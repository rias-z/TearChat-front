import request from 'superagent'


import { API_ENDPOINT } from '../../../config/config'


export const apiCreateToken = async (token) => {
  /**
   * アクセストークンからユーザ情報を取得する
   * @param {string}  token アクセストークン
   * @return {Object} res.body  ユーザ情報
   */
  const res = await request
    .get(API_ENDPOINT + '/create/token')
    .set({ Authorization: token })

  return res.body
}

