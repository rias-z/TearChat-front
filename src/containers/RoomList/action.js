export const successGetOmittedRooms = (rooms) => {
  return {
    type: 'SUCCESS_GET_OMITTED_ROOMS',
    rooms: rooms,
    isLoading: true
  }
}

export const failedEnteredRoom = (error_message) => {
  return {
    type: 'FAILED_ENTERED_ROOM',
    error_message: error_message
  }
}
