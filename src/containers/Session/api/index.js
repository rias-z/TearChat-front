import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiGetRoomInfoById = async (token, roomId) => {
  const res = await request
    .post(endpoint + '/room/get/info')
    .set({ Authorization: token })
    .send({ roomId: roomId })

  return res.body
}
