const initialState = {
  privateMessages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_PRIVATE_MESSAGES': {
      return Object.assign({}, state, {
        privateMessages: action.privateMessages
      })
    }
    case 'SUCCESS_UPDATE_MESSAGE_TO_PRIVATE': {
      return Object.assign({}, state, {
        privateMessages: [
          ...state.privateMessages,
          action.message
        ]
      })
    }
    default:
      return state
  }
}
