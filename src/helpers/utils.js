export const clientTokenCheck = () => {
  /**
   * localStorageから取得したアクセストークンをトークンとして返す
   * @return アクセストークン
   */
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    const err = new Error('NoAccessToken')
    err.status = 401

    throw err
  }

  return 'Bearer ' + accessToken
}
