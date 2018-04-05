import { apiLoginRequest } from './api'
import { successLogin, failedLogin } from '../App/action'


export const handleLoginSubmit = (props, inputUserName, inputPassword) => async (dispatch) => {
  try {
    const userInfo = await apiLoginRequest(inputUserName, inputPassword)

    // ローカルストレージにアクセストークンを保存
    localStorage.setItem('accessToken', userInfo.accessToken)

    dispatch(successLogin(userInfo))
    props.history.push('/')
  } catch (err) {
    dispatch(failedLogin())
  }
}
