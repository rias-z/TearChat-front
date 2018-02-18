import { apiLoginRequest } from './api'
import { successLogin, failedLogin } from '../App/action'


export const handleLoginSubmit = (props, inputUserName, inputPassword) => async (dispatch) => {
  try {
    const result = await apiLoginRequest(inputUserName, inputPassword)

    const { userId, userName } = result

    Object.keys(result).forEach(key => {
      localStorage.setItem(key, result[key])
    })

    dispatch(successLogin(userId, userName))
    props.history.push('/')
  } catch (err) {
    dispatch(failedLogin())
  }
}
