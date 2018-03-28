import { apiTokenCheck } from './api'
import { successTokenCheck, logout } from './action'
import { clientTokenCheck } from '../../helpers/utils'


export const initializedApp = () => async (dispatch) => {
  try {
    const token = clientTokenCheck()
    const userInfo = await apiTokenCheck(token)

    Object.keys(userInfo).forEach(key => {
      localStorage.setItem(key, userInfo[key])
    })

    dispatch(successTokenCheck(userInfo))
  } catch (err) {
    localStorage.clear()
    dispatch(logout())
  }
}

export const logoutApp = () => (dispatch) => {
  localStorage.clear()
  dispatch(logout())
}
