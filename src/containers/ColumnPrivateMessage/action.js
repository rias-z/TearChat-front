export const successInitializedPrivateMessages = (privateMessages) => {
  return {
    type: 'SUCCESS_INITIALIZED_PRIVATE_MESSAGES',
    privateMessages: privateMessages,
  }
}

export const successUpdatePrivateMessage = (message) => {
  return {
    type: 'SUCCESS_UPDATE_PRIVATE_MESSAGE',
    message: message,
  }
}
