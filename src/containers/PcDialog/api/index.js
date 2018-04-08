import request from 'superagent'
import { clientTokenCheck } from '../../../helpers/utils'


import { API_ENDPOINT } from '../../../config/config'


export const apiGetPcList = async () => {
  const token = clientTokenCheck()

  const res = await request
    .get(API_ENDPOINT + '/pc/get/all')
    .set({ Authorization: token })

  return res.body
}
