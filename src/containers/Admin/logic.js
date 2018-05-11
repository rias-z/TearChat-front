import hash from 'hash.js'

// api
import { apiAdminLoginRequest } from './api'

// actions
import { successAdminLogin, failedAdminLogin } from './action'

// config
import { config } from '../../config/secretConfig'


export const handleLoginSubmit = (userName, password) => async (dispatch) => {
  try {
    const hashPassword = hash.sha256().update(password + config.SECRET_KEY).digest('hex')

    const result = await apiAdminLoginRequest(userName, hashPassword)

    dispatch(successAdminLogin(result))
  } catch (err) {
    dispatch(failedAdminLogin())
  }
}
