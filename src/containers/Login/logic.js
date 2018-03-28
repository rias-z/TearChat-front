import { apiLoginRequest } from './api'
import { successLogin, failedLogin } from '../App/action'


export const handleLoginSubmit = (props, inputUserName, inputPassword) => async (dispatch) => {
  try {
    const userInfo = await apiLoginRequest(inputUserName, inputPassword)

    Object.keys(userInfo).forEach(key => {
      localStorage.setItem(key, userInfo[key])
    })

    dispatch(successLogin(userInfo))
    props.history.push('/')
  } catch (err) {
    dispatch(failedLogin())
  }
}
