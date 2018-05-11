import hash from 'hash.js'

import { successRegisterUser, failedRegisterUser } from './action'

// api
import { apiRegisterRequest } from './api/index'

// config
import { config } from '../../config/secretConfig'


export const handleRegisterSubmit = (props, userName, password) => async (dispatch) => {
  try {
    const hashPassword = hash.sha256().update(password + config.SECRET_KEY).digest('hex')

    const result = await apiRegisterRequest(userName, hashPassword)

    if (result) {
      dispatch(successRegisterUser('success registed'))
    } else {
      dispatch(successRegisterUser('already registed'))
    }
  } catch (err) {
    console.log(err)
    dispatch(failedRegisterUser('server error'))
  }
}
