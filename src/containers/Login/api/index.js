import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiLoginRequest = async (_userName, _password) => {
  /**
   * ログイン処理
   * @param {string}  _userName ユーザの名前
   * @param {string}  _password パスワード
   * @return {Object} res.body  ユーザ情報
   *  200: ログイン成功
   *  404: userNameかpasswordが間違っている
   *  500: 不正
   */
  const res = await request
    .post(endpoint + '/auth/login')
    .send({ 'userName': _userName, 'password': _password })

  return res.body
}
