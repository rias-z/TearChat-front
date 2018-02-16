import request from 'superagent'
import { successGetCompactRooms, failedGetCompactRooms } from '../action'


const endpoint = 'http://localhost:5000/api'


export const apiGetCompactRooms = () => async (dispatch) => {
  try {
    const res = await request
      .get(endpoint + '/room/get/compact')

    dispatch(successGetCompactRooms(res.body))
  } catch (err) {
    console.log(err)
    dispatch(failedGetCompactRooms())
  }
}


export const apiEnterRoom = async (room_id) => {
  try {
    const access_token = localStorage.getItem('access_token')
    const token = 'Bearer ' + access_token

    const res = await request
      .post(endpoint + '/room/enter')
      .set({Authorization: token})
      .send({room_id: room_id})

    return true
  } catch (err) {
    return false
  }
}
