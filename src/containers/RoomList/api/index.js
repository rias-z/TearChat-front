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

