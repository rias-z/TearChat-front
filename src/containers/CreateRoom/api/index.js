import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiCreateRoom = async (token, room_obj) => {
  const res = await request
    .post(endpoint + '/room/create')
    .send({room_obj})
    .set({Authorization: token})

  return res.body
}
