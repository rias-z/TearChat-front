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
    // case 'SUCCESS_POST_PUBLIC_CHAT_COMMENT': {
    //   return Object.assign({}, state, {
    //     publicChat: [
    //       ...state.publicChat,
    //       action.publicChatComment
    //     ]
    //   })
    // }
    default:
      return state
  }
}
