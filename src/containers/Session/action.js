export const successEnteredRoom = (rooms) => {
export const successInitializedRoomInfo = (room_info) => {
  return {
    type: 'SUCCESS_ENTERED_ROOMS',
    rooms: rooms,
    type: 'SUCCESS_INITIALIZED_ROOM_INFO',
    room_info: room_info,
    isLoading: true
  }
}

export const failedEnteredRoom = () => {
  return {
    type: 'FAILED_ENTERED_ROOMS'
  }
}
