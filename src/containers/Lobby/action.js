export const successGetCompactRooms = (rooms) => {
  return {
    type: 'SUCCESS_GET_COMPACT_ROOMS',
    rooms: rooms,
    isLoading: true
  }
}

export const failedGetCompactRooms = () => {
  return {
    type: 'FAILED_GET_COMPACT_ROOMS'
  }
}
