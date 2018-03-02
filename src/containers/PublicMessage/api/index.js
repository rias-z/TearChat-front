import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiPostComment = async (token, roomId, content) => {
  const res = await request
    .post(endpoint + '/message/post')
    .set({ Authorization: token })
    .send(
      {
        roomId: roomId,
        messageType: 'public',
        channelId: 1,
        content: content,
      })

  return res.body
}
