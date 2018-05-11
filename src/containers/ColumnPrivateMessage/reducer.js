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
    case 'SUCCESS_UPDATE_PRIVATE_MESSAGE': {
      return Object.assign({}, state, {
        privateMessages: [
          ...state.privateMessages,
          action.message
        ]
      })
    }
    case 'SUCCESS_CLEAR_PRIVATE_MESSAGE': {
      return initialState
    }
    default:
      return state
  }
}
