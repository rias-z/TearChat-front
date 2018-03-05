import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiTokenCheck = async (token) => {
  /** アクセストークンからユーザ情報を取得する
   *  Returns:
   *    200:
   *      userId:       (int)
   *      userName:     (str)
   *      accessToken:  (str)
   *    500: 不正
   */
  const res = await request
    .get(endpoint + '/auth/token_check')
    .set({ Authorization: token })

  return res.body
}

