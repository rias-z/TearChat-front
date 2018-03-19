export const successInitializedPublicMessages = (publicMessages) => {
  return {
    type: 'SUCCESS_INITIALIZED_PUBLIC_MESSAGES',
    publicMessages: publicMessages,
  }
}

export const successUpdateMessageToPublic = (message) => {
  return {
    type: 'SUCCESS_UPDATE_MESSAGE_TO_PUBIC',
    message: message,
  }
}