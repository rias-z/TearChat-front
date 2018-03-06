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
    case 'SUCCESS_UPDATE_MESSAGE_TO_PUBIC': {
      return Object.assign({}, state, {
        publicMessages: [
          ...state.publicMessages,
          action.message
        ]
      })
    }
    default:
      return state
  }
}
