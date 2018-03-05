const initialState = {
  isLoading: false,
  roomId: null,
  roomName: null,
  socket: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_ROOM_INFO': {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        roomId: action.room.roomId,
        roomName: action.room.roomName,
      })
    }
    case 'ADD_NEW_SOCKET': {
      return Object.assign({}, state, {
        socket: action.socket,
      })
    }
    default:
      return state
  }
}
