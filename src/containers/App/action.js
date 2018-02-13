export const tokenCheckSuccess = (user_id, user_name) => {
  return {
    type: 'TOKEN_CHECK_SUCCESS',
    user_id: user_id,
    user_name: user_name
  }
}

export const tokenCheckFailed = () => {
  return {
    type: 'TOKEN_CHECK_FAILED'
  }
}

export const loginSuccess = (user_id, user_name) => {
  return {
    type: 'LOGIN_SUCCESS',
    user_id: user_id,
    user_name: user_name
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
