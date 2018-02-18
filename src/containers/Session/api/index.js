import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiGetRoomInfoById = async (token, room_id) => {
  const res = await request
    .post(endpoint + '/room/get/info')
    .set({Authorization: token})
    .send({room_id: room_id})

  return res.body
}
