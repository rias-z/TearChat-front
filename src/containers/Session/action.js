export const successInitializedRoomInfo = (room) => {
  return {
    type: 'SUCCESS_INITIALIZED_ROOM_INFO',
    room: room,
    isLoading: true
  }
}
