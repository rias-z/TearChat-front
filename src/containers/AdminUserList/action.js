export const successInitializedAdminUserList = (userList) => {
  return {
    type: 'SUCCESS_INITIALIZED_ADMIN_USER_LIST',
    userList: userList,
  }
}

export const failedInitializedAdminUserList = () => {
  return {
    type: 'FAILED_INITIALIZED_ADMIN_USER_LIST',
  }
}
