const initialState = {
  isLoading: false,
  roomId: null,
  roomName: null,
  participateUsers: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_ROOM_INFO': {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        roomId: action.room.roomInfo.roomId,
        roomName: action.room.roomInfo.roomName,
        participateUsers: action.room.participateUsers
      })
    }
    default:
      return state
  }
}
