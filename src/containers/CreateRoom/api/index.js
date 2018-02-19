import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiCreateRoom = async (token, roomObj) => {
  const res = await request
    .post(endpoint + '/room/create')
    .set({ Authorization: token })
    .send({ roomObj })

  return res.body
}
