// (<= Session.action)
export const successSetRoomPcInfo = (roomPcInfo) => {
  return {
    type: 'SUCCESS_SET_ROOM_PC_INFO',
    roomPcInfo: roomPcInfo,
  }
}
