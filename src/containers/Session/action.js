export const successInitializedRoomInfo = (room_info) => {
  return {
    type: 'SUCCESS_INITIALIZED_ROOM_INFO',
    room_info: room_info,
    isLoading: true
  }
}
