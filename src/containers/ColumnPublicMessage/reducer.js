const initialState = {
  publicMessages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_PUBLIC_MESSAGES': {
      return Object.assign({}, state, {
        publicMessages: action.publicMessages
      })
    }
    case 'SUCCESS_UPDATE_PUBLIC_MESSAGE': {
      return Object.assign({}, state, {
        publicMessages: [
          ...state.publicMessages,
          action.message
        ]
      })
    }
    case 'SUCCESS_CLEAR_PUBLIC_MESSAGE': {
      return initialState
    }
    default:
      return state
  }
}
