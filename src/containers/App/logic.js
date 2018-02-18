import { apiTokenCheck } from './api'
import { successTokenCheck, logout } from './action'


export const initializedApp = () => async (dispatch) => {
  // localStorageからaccess_tokenを取得
  const access_token = localStorage.getItem('access_token')

  // アクセストークンがない場合，ログアウト
  if (!access_token){
    localStorage.clear()
    dispatch(logout())
    return
  }

  // トークンチェック
  const token = 'Bearer ' + access_token
  const result = await apiTokenCheck(token)

  if ( !result ) {
    localStorage.clear()
    dispatch(logout())
    return
  }

  Object.keys(result).forEach(key => {
    localStorage.setItem(key, result[key])
  })

  const {user_id, user_name} = result
  dispatch(successTokenCheck(user_id, user_name))
}

export const logoutApp = () => (dispatch) => {
  localStorage.clear()
  dispatch(logout())
}