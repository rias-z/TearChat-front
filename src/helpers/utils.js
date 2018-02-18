export const clientTokenCheck = () => {
  /* localStorageから取得したアクセストークンをトークンとして返す
     アクセストークンがない場合はログアウトさせる
  Returns:
    Ok:
      token: トークンデータ
    Exception: throwを発生させる
   */
  const access_token = localStorage.getItem('access_token')

  if ( !access_token ) {
    const err = new Error('NoAccessToken')
    err.status = 401

    throw err
  }

  return 'Bearer ' + access_token
}
