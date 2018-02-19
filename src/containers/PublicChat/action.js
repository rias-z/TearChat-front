export const successInitializedPublicChat = (publicChat) => {
  return {
    type: 'SUCCESS_INITIALIZED_PUBLIC_CHAT',
    publicChat: publicChat
  }
}

export const successPostPublicChatComment = (publicChatComment) => {
  return {
    type: 'SUCCESS_POST_PUBLIC_CHAT_COMMENT',
    publicChatComment: publicChatComment
  }
}
