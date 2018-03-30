import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiCreateToken = async (token) => {
  /**
   * アクセストークンからユーザ情報を取得する
   * @param {string}  token アクセストークン
   * @return {Object} res.body  ユーザ情報
   */
  const res = await request
    .get(endpoint + '/create/token')
    .set({ Authorization: token })

  return res.body
}

