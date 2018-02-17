import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiGetOmittedRooms = async () => {
  try {
    const res = await request
      .get(endpoint + '/room/get/omitted')

    return res.body
  } catch (err) {
    return null
  }
}

export const apiEnterRoom = async (room_id) => {
  try {
    const access_token = localStorage.getItem('access_token')
    const token = 'Bearer ' + access_token

    await request
      .post(endpoint + '/room/enter')
      .set({Authorization: token})
      .send({room_id: room_id})

    return true
  } catch (err) {
    return false
  }
}
