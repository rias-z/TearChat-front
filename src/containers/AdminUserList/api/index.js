import request from 'superagent'

// config
import { API_ENDPOINT } from '../../../config/config'


export const apiGetAdminUserList = async () => {
  const res = await request
    .get(API_ENDPOINT + '/auth/admin/get/user')

  return res.body
}

export const apiPutAdminUserList = async (fkUserId, isActive) => {
  const res = await request
    .post(API_ENDPOINT + '/auth/admin/put/user')
    .send({
      fkUserId: fkUserId,
      isActive: isActive
    })

  return res.body
}
