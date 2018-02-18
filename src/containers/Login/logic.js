import { apiLoginRequest } from './api'
import { successLogin, failedLogin } from '../App/action'


export const handleLoginSubmit = (props, user_name, password) => async (dispatch) => {
  try {
    const result = await apiLoginRequest(user_name, password)

    const {res_user_id, res_user_name} = result

    Object.keys(result).forEach(key => {
      localStorage.setItem(key, result[key])
    })

    dispatch(successLogin(res_user_id, res_user_name))
    props.history.push('/')
  } catch (err) {
    dispatch(failedLogin())
  }
}
