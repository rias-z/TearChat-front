import request from 'superagent'
import { successGetCompactRooms, failedGetCompactRooms } from '../action'


const endpoint = 'http://localhost:5000/api'


export const apiGetCompactRooms = (input_user_name, input_password) => async (dispatch) => {
  try {
    const res = await request
      .get(endpoint + '/room/get/compact')

    dispatch(successGetCompactRooms(res.body))
    // dispatch(failedGetCompactRooms())

  } catch (err) {
    console.log(err)
    dispatch(failedGetCompactRooms())
  }
}

