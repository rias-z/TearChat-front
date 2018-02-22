import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiPostComment = async (token, roomId, comment) => {
  const res = await request
    .post(endpoint + '/comment/post')
    .set({ Authorization: token })
    .send({ roomId: roomId, comment: comment })

  return res.body
}
