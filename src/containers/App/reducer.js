const initialState = {
  isTokenChecked: false,
  isAuthenticated: false,
  userId: null,
  userName: null,
  thumbnail: null,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_TOKEN_CHECK': {
      return Object.assign({}, state, {
        isTokenChecked: true,
        isAuthenticated: true,
        userId: action.userInfo.userId,
        userName: action.userInfo.userName,
        thumbnail: action.userInfo.thumbnail,
      })
    }
    case 'SUCCESS_LOGIN': {
      return Object.assign({}, state, {
        isAuthenticated: true,
        userId: action.userInfo.userId,
        userName: action.userInfo.userName,
        thumbnail: action.userInfo.thumbnail,
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
    case 'SUCCESS_UPDATE_THUMBNAIL': {
      return Object.assign({}, state, {
        thumbnail: action.thumbnail,
      })
    }
    default:
      return state
  }
}
