import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


// アクセストークンからuser情報を取得する
export const apiTokenCheck = async (token) => {
  const res = await request
    .get(endpoint + '/auth/token_check')
    .set({ Authorization: token })

  return res.body
}

