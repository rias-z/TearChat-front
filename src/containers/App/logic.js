import { apiCreateToken } from './api'
import { successTokenCheck, logout } from './action'
import { clientTokenCheck } from '../../helpers/utils'


/**
 * アクセス or リロード時
 *
 * 1. トークンチェックを行い，新しいトークンを発行してローカルストレージに保存
 * 2. ユーザ情報をstate.Appに保存
 */
export const initializedApp = () => async (dispatch) => {
  try {
    const token = clientTokenCheck()
    // 新しいアクセストークンを発行
    const userInfo = await apiCreateToken(token)

    // ローカルストレージにアクセストークンを保存
    localStorage.setItem('accessToken', userInfo.accessToken)

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
