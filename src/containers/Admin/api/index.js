import request from 'superagent'

// config
import { API_ENDPOINT } from '../../../config/config'


export const apiAdminLoginRequest = async (userName, password) => {
  const res = await request
    .post(API_ENDPOINT + '/auth/admin/login')
    .send({
      'userName': userName,
      'password': password,
    })

  return res.body
}
