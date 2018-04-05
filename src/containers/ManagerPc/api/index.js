import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiGetPcList = async (token) => {
  const res = await request
    .get(endpoint + '/pc/get/all')
    .set({ Authorization: token })

  return res.body
}

export const apiPostPc = async (token, pcInfo) => {
  const res = await request
    .post(endpoint + '/pc/post')
    .set({ Authorization: token })
    .send({ pcInfo: pcInfo })

  return res.body
}

export const apiUpdatePcInfo = async (token, pcInfo) => {
  const res = await request
    .post(endpoint + '/pc/put')
    .set({ Authorization: token })
    .send({ pcInfo: pcInfo })

  return res.body
}

export const apiPostPcThumbnail = async (token, imageFile) => {
  const res = await request
    .post(endpoint + '/image/post/pc/thumbnail')
    .set({ Authorization: token })
    .attach('image', imageFile)

  return res.body
}
