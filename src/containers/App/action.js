export const successTokenCheck = (userInfo) => {
  return {
    type: 'SUCCESS_TOKEN_CHECK',
    userInfo: userInfo
  }
}

export const successLogin = (userInfo) => {
  return {
    type: 'SUCCESS_LOGIN',
    userInfo: userInfo
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
