const initialState = {
  isTokenChecked: false,
  isAuthenticated: false,
  userId: null,
  userName: null,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_TOKEN_CHECK': {
      return Object.assign({}, state, {
        isTokenChecked: true,
        isAuthenticated: true,
        userId: action.userId,
        userName: action.userName
      })
    }
    case 'SUCCESS_LOGIN': {
      return Object.assign({}, state, {
        isAuthenticated: true,
        userId: action.userId,
        userName: action.userName
      })
    }
    case 'FAILED_LOGIN': {
      return Object.assign({}, state, {
        errorMessage: action.errorMessage
      })
    }
    case 'LOGOUT': {
      return Object.assign({}, state, {
        isTokenChecked: true,
        isAuthenticated: false,
        userId: null,
        userName: null
      })
    }
    default:
      return state
  }
}
