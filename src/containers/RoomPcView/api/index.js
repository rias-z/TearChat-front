// import request from 'superagent'
// import { clientTokenCheck } from '../../../helpers/utils'

// const endpoint = 'http://localhost:5000/api'


// export const apiAddPc = async (roomId, pcInfo) => {
//   const token = clientTokenCheck()

//   const res = await request
//     .post(endpoint + '/room/post/pc')
//     .set({ Authorization: token })
//     .send({
//       pcInfo: pcInfo,
//       roomId: roomId,
//     })

//   return res.body
// }
