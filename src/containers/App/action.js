export const successTokenCheck = (userId, userName) => {
  return {
    type: 'SUCCESS_TOKEN_CHECK',
    userId: userId,
    userName: userName
  }
}

export const successLogin = (userId, userName) => {
  return {
    type: 'SUCCESS_LOGIN',
    userId: userId,
    userName: userName
  }
}

export const failedLogin = () => {
  return {
    type: 'FAILED_LOGIN',
    errorMessage: 'failed Login'
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const successUpdateThumbnail = (thumbnail) => {
  return {
    type: 'SUCCESS_UPDATE_THUMBNAIL',
    thumbnail: thumbnail,
  }
}
