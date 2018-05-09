const initialState = {
  userList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_ADMIN_USER_LIST': {
      return Object.assign({}, state, {
        userList: action.userList,
      })
    }
    default:
      return state
  }
}
