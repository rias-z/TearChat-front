const initialState = {
  error_message: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'FAILED_CREATE_ROOM': {
      return Object.assign({}, state, {
        error_message: action.error_message
      })
    }
    default:
      return state
  }
}
