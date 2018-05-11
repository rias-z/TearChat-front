import request from 'superagent'


import { API_ENDPOINT } from '../../../config/config'


export const apiGetPcList = async (token) => {
  const res = await request
    .get(API_ENDPOINT + '/pc/get/all')
    .set({ Authorization: token })

  return res.body
}

export const apiPostPcInfo = async (token, pcInfo) => {
  const res = await request
    .post(API_ENDPOINT + '/pc/post')
    .set({ Authorization: token })
    .send({ pcInfo: pcInfo })

  return res.body
}

export const apiUpdatePcInfo = async (token, pcInfo) => {
  const res = await request
    .post(API_ENDPOINT + '/pc/put')
    .set({ Authorization: token })
    .send({ pcInfo: pcInfo })

  return res.body
}

export const apiPostPcInfoThumbnail = async (token, imageFile) => {
  const res = await request
    .post(API_ENDPOINT + '/image/post/pc/thumbnail')
    .set({ Authorization: token })
    .attach('image', imageFile)

  return res.body
}
