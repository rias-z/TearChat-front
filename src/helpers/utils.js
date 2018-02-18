export const clientTokenCheck = () => {
  /* localStorageから取得したアクセストークンをトークンとして返す
     アクセストークンがない場合はログアウトさせる
  Returns:
    Ok:
      token: トークンデータ
    Exception: throwを発生させる
   */
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    const err = new Error('NoAccessToken')
    err.status = 401

    throw err
  }

  return 'Bearer ' + accessToken
}
