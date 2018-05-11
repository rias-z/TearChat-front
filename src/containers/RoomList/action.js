export const successGetOmittedRooms = (rooms) => {
  return {
    type: 'SUCCESS_GET_OMITTED_ROOMS',
    rooms: rooms,
    isLoading: true
  }
}

export const failedEnteredRoom = (errorMessage) => {
  return {
    type: 'FAILED_ENTERED_ROOM',
    errorMessage: errorMessage
  }
}
