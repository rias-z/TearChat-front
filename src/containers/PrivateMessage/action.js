export const successInitializedPrivateMessages = (privateMessages) => {
  return {
    type: 'SUCCESS_INITIALIZED_PRIVATE_MESSAGES',
    privateMessages: privateMessages,
  }
}

export const successUpdateMessageToPrivate = (message) => {
  return {
    type: 'SUCCESS_UPDATE_MESSAGE_TO_PRIVATE',
    message: message,
  }
}
