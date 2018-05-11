import request from 'superagent'

import { API_ENDPOINT } from '../../../config/config'


export const apiPostImage = async (token, image) => {
  const res = await request
    .post(API_ENDPOINT + '/image/post')
    .set({ Authorization: token })
    .attach('image', image)

  return res.body
}
