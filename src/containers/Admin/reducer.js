const initialState = {
  isAdmin: false,
  userName: null,
  errorMessage: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_ADMIN_LOGIN': {
      return Object.assign({}, state, {
        isAdmin: true,
        userName: action.userName,
      })
    }
    case 'FAILED_ADMIN_LOGIN': {
      return Object.assign({}, state, {
        isAdmin: false,
        userName: null,
        errorMessage: 'failed login',
      })
    }
    default:
      return state
  }
}
