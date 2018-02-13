import request from 'superagent'
import { loginSuccess } from '../../App/action'


const endpoint = 'http://localhost:5000/api'


export const apiLoginRequest = (input_user_name, input_password) => async (dispatch) => {
  try {
    const res = await request
      .post(endpoint + '/auth/login')
      .send({'user_name': input_user_name, 'password': input_password})

    const {user_id, user_name} = res.body

    // ユーザが存在しなかった場合
    if (!user_id)
      return false

    // ローカルストレージに保存
    Object.keys(res.body).forEach(key => {
      localStorage.setItem(key, res.body[key])
    })

    // stateに保存
    dispatch(loginSuccess(user_id, user_name))

    return true
  } catch (err) {
    console.log(err)
    return false
  }
}
