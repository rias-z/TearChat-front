export const successRegisterUser = (message) => {
  return {
    type: 'SUCCESS_REGISTER_USER',
    infoMessage: message,
  }
}

export const failedRegisterUser = (message) => {
  return {
    type: 'FAILED_REGISTER_USER',
    errorMessage: message,
  }
}
