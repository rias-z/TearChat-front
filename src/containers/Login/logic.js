import { apiLoginRequest } from './api'
import { successLogin, failedLogin } from '../App/action'


export const handleLoginSubmit = (props, input_user_name, input_password) => async (dispatch) => {
  const result = await apiLoginRequest(input_user_name, input_password)

  if (result) {
    const {user_id, user_name} = result

    // ローカルストレージに保存
    Object.keys(result).forEach(key => {
      localStorage.setItem(key, result[key])
    })

    // state更新
    dispatch(successLogin(user_id, user_name))

    // Lobbyに遷移
    props.history.push('/')
  } else {
    dispatch(failedLogin())
  }
}
