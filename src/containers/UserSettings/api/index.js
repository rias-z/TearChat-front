import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiPostImage = async (token, image) => {
  const res = await request
    .post(endpoint + '/image/post')
    .set({ Authorization: token })
    .attach('image', image)

  return res.body
}
