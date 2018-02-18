import { apiTokenCheck } from './api'
import { successTokenCheck, logout } from './action'
import { clientTokenCheck } from '../../helpers/utils'


export const initializedApp = () => async (dispatch) => {
  try {
    const token = clientTokenCheck()
    const result = await apiTokenCheck(token)

    Object.keys(result).forEach(key => {
      localStorage.setItem(key, result[key])
    })

    const { userId, userName } = result
    dispatch(successTokenCheck(userId, userName))
  } catch (err) {
    localStorage.clear()
    dispatch(logout())
  }
}

export const logoutApp = () => (dispatch) => {
  localStorage.clear()
  dispatch(logout())
}
