const initialState = {
  errorMessage: null,
  infoMessage: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_REGISTER_USER': {
      return Object.assign({}, state, {
        infoMessage: action.infoMessage,
      })
    }
    case 'FAILED_REGISTER_USER': {
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
      })
    }
    default:
      return state
  }
}
