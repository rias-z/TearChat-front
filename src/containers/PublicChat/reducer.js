const initialState = {
  publicChat: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_PUBLIC_CHAT': {
      return Object.assign({}, state, {
        publicChat: action.publicChat
      })
    }
    case 'SUCCESS_POST_PUBLIC_CHAT_COMMENT': {
      return Object.assign({}, state, {
        publicChat: [
          ...state.publicChat,
          action.publicChatComment
        ]
      })
    }
    default:
      return state
  }
}
