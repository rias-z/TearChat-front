const initialState = {
  roomPcInfo: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    // (<= Session.action)
    case 'SUCCESS_SET_ROOM_PC_INFO': {
      return Object.assign({}, state, {
        roomPcInfo: action.roomPcInfo,
      })
    }
    default:
      return state
  }
}
