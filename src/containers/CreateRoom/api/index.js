import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiCreateRoom = async (room_obj) => {
  try {
    await request
      .post(endpoint + '/room/create')
      .send({room_obj})

    return true
  } catch (err) {
    return false
  }
}
