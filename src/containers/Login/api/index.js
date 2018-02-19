import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiLoginRequest = async (inputUserName, inputPassword) => {
  const res = await request
    .post(endpoint + '/auth/login')
    .send({ 'userName': inputUserName, 'password': inputPassword })

  return res.body
}
