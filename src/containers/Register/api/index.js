import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiRegisterRequest = async (userName, password) => {
  const res = await request
    .post(endpoint + '/auth/register')
    .send({ 'userName': userName, 'password': password })

  return res.body
}
