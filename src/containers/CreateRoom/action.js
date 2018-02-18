export const failedCreateRoom = (errorMessage) => {
  return {
    type: 'FAILED_CREATE_ROOM',
    errorMessage: errorMessage
  }
}
