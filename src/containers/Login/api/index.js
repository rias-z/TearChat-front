import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiLoginRequest = async (input_user_name, input_password) => {
  const res = await request
    .post(endpoint + '/auth/login')
    .send({'user_name': input_user_name, 'password': input_password})

  return res.body
}
