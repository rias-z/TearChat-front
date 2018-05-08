import hash from 'hash.js'

import { apiLoginRequest } from './api'
import { successLogin, failedLogin } from '../App/action'

// config
import { config } from '../../config/secretConfig'


export const handleLoginSubmit = (props, userName, password) => async (dispatch) => {
  try {
    const hashPassword = hash.sha256().update(password + config.SECRET_KEY).digest('hex')

    const userInfo = await apiLoginRequest(userName, hashPassword)

    // ローカルストレージにアクセストークンを保存
    localStorage.setItem('accessToken', userInfo.accessToken)

    dispatch(successLogin(userInfo))
    props.history.push('/')
  } catch (err) {
    dispatch(failedLogin())
  }
}
