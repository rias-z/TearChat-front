import request from 'superagent'
import { clientTokenCheck } from '../../../helpers/utils'


const endpoint = 'http://localhost:5000/api'


export const apiGetPcList = async () => {
  const token = clientTokenCheck()

  const res = await request
    .get(endpoint + '/pc/get/all')
    .set({ Authorization: token })

  return res.body
}
