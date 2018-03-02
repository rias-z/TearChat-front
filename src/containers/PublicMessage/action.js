// export const successPostPublicMessage = (message) => {
//   return {
//     type: 'SUCCESS_POST_PUBLIC_MESSAGE',
//     publicMessage: message,
//   }
// }

export const successInitializedPublicMessages = (publicMessages) => {
  return {
    type: 'SUCCESS_INITIALIZED_PUBLIC_MESSAGES',
    publicMessages: publicMessages,
  }
}
