export const successInitializedRoomInfo = (roomInfo) => {
  return {
    type: 'SUCCESS_INITIALIZED_ROOM_INFO',
    roomInfo: roomInfo,
    isLoading: true
  }
}
