import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiCreateRoom = async (room_obj, input_access_token) => {
  try {
    const token = 'Bearer ' + input_access_token

    await request
      .post(endpoint + '/room/create')
      .send({room_obj})
      .set({Authorization: token})

    return true
  } catch (err) {
    return false
  }
}
