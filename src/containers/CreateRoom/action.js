export const failedCreateRoom = (error_message) => {
  return {
    type: 'FAILED_CREATE_ROOM',
    error_message: error_message
  }
}
