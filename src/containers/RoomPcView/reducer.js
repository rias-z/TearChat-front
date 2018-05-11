const initialState = {
  roomPcInfo: [],
  selfRoomPcInfo: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    // (<= Session.action)
    case 'SUCCESS_SET_ROOM_PC_INFO': {
      return Object.assign({}, state, {
        roomPcInfo: action.roomPcInfo,
      })
    }
    case 'SUCCESS_SET_SELF_ROOM_PC_INFO': {
      return Object.assign({}, state, {
        selfRoomPcInfo: action.selfRoomPcInfo,
      })
    }
    case 'SUCCESS_CLEAR_ROOM_PC_VIEW': {
      return initialState
    }
    default:
      return state
  }
}
