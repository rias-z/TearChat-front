import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiLoginRequest = async (inputUserName, inputPassword) => {
  /** ログイン処理を行なった後，ユーザ情報とアクセストークンを取得する
   *  Returns:
   *    200: ログイン成功
   *      userId:       (int)
   *      userName:     (str)
   *      accessToken:  (str)
   *    404: userIdかpasswordが間違っている
   *    500: 不正
   */
  const res = await request
    .post(endpoint + '/auth/login')
    .send({ 'userName': inputUserName, 'password': inputPassword })

  return res.body
}
