const initialState = {
  is_token_checked: false,
  is_authenticated: false,
  user_id: null,
  user_name: null,
  error_message: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_TOKEN_CHECK': {
      return Object.assign({}, state, {
        is_token_checked: true,
        is_authenticated: true,
        user_id: action.user_id,
        user_name: action.user_name
      })
    }
    case 'FAILED_TOKEN_CHECK': {
      return Object.assign({}, state, {
        is_token_checked: true,
        is_authenticated: false,
        user_id: null,
        user_name: null
      })
    }
    case 'SUCCESS_LOGIN': {
      return Object.assign({}, state, {
        is_authenticated: true,
        user_id: action.user_id,
        user_name: action.user_name
      })
    }
    case 'FAILED_LOGIN': {
      return Object.assign({}, state, {
        error_message: action.error_message
      })
    }
    case 'LOGOUT': {
      return Object.assign({}, state, {
        is_authenticated: false,
        user_id: null,
        user_name: null
      })
    }
    default:
      return state
  }
}
