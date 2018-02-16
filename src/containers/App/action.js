export const successTokenCheck = (user_id, user_name) => {
  return {
    type: 'SUCCESS_TOKEN_CHECK',
    user_id: user_id,
    user_name: user_name
  }
}

export const failedTokenCheck = () => {
  return {
    type: 'FAILED_TOKEN_CHECK'
  }
}

export const successLogin = (user_id, user_name) => {
  return {
    type: 'SUCCESS_LOGIN',
    user_id: user_id,
    user_name: user_name
  }
}

export const failedLogin = () => {
  return {
    type: 'FAILED_LOGIN',
    error_message: 'failed Login'
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
