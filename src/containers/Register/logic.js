import { successRegisterUser, failedRegisterUser } from './action'

// api
import { apiRegisterRequest } from './api/index'


export const handleRegisterSubmit = (props, userName, password) => async (dispatch) => {
  try {
    const result = await apiRegisterRequest(userName, password)

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
