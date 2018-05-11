const initialState = {
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FAILED_CREATE_ROOM': {
      return Object.assign({}, state, {
        errorMessage: action.errorMessage
      })
    }
    default:
      return state
  }
}
