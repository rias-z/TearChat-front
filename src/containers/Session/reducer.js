const initialState = {
  isLoading: false,
  roomId: null,
  roomName: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_ROOM_INFO': {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        roomId: action.roomInfo.roomId,
        roomName: action.roomInfo.roomName
      })
    }
    default:
      return state
  }
}
