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

export const failedLogin = (result) => {
  return {
    type: 'FAILED_LOGIN',
    errorMessage: result.errorMessage,
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
