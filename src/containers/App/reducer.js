const initialState = {
  is_token_checked: false,
  is_authenticated: false,
  user_id: null,
  user_name: null
}

export default (state=initialState, action) =>{
  switch (action.type) {
    case 'TOKEN_CHECK_SUCCESS': {
      return Object.assign({}, state, {
        is_token_checked: true,
        is_authenticated: true,
        user_id: action.user_id,
        user_name: action.user_name
      })
    }
    case 'TOKEN_CHECK_FAILED': {
      return Object.assign({}, state, {
        is_token_checked: true,
        is_authenticated: false,
        user_id: null,
        user_name: null
      })
    }
    case 'LOGIN_SUCCESS': {
      return Object.assign({}, state, {
        is_authenticated: true,
        user_id: action.user_id,
        user_name: action.user_name
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
