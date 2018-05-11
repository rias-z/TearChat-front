export const successAdminLogin = (userInfo) => {
  return {
    type: 'SUCCESS_ADMIN_LOGIN',
    userName: userInfo.userName,
  }
}

export const failedAdminLogin = () => {
  return {
    type: 'FAILED_ADMIN_LOGIN',
  }
}
