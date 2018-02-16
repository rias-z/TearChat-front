import request from 'superagent'


const endpoint = 'http://localhost:5000/api'


export const apiLoginRequest = async (input_user_name, input_password) => {
  try {
    const res = await request
      .post(endpoint + '/auth/login')
      .send({'user_name': input_user_name, 'password': input_password})

    const {user_id, user_name} = res.body
    if (!user_id || !user_name) {
      return null
    }

    return res.body
  } catch (err) {
    return null
  }
}
