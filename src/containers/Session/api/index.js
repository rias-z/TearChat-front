import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiGetRoomInfoById = async (room_id) => {
  try {
    const access_token = localStorage.getItem('access_token')
    const token = 'Bearer ' + access_token

    const res = await request
      .post(endpoint + '/room/get/info')
      .set({Authorization: token})
      .send({room_id: room_id})

    return res.body
  } catch (err) {
    return null
  }
}
