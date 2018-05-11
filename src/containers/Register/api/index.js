import request from 'superagent'


import { API_ENDPOINT } from '../../../config/config'


export const apiRegisterRequest = async (userName, password) => {
  const res = await request
    .post(API_ENDPOINT + '/auth/register')
    .send({ 'userName': userName, 'password': password })

  return res.body
}
