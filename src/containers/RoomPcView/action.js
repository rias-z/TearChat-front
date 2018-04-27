// (<= Session.action)
export const successSetRoomPcInfo = (roomPcInfo) => {
  return {
    type: 'SUCCESS_SET_ROOM_PC_INFO',
    roomPcInfo: roomPcInfo,
  }
}

// (<= Session.action)
export const successSetSelfRoomPcInfo = (selfRoomPcInfo) => {
  return {
    type: 'SUCCESS_SET_SELF_ROOM_PC_INFO',
    selfRoomPcInfo: selfRoomPcInfo,
  }
}
