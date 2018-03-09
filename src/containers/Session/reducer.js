const initialState = {
  isLoading: false,
  roomId: null,
  roomName: null,
  socket: null,
  kpInfo: null,
  membersInfo: [],
  activeUsers: [],
  isKp: false,
  selfChannelId: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_ROOM_INFO': {
      return Object.assign({}, state, {
        roomId: action.room.roomId,
        roomName: action.room.roomName,
        kpInfo: action.room.kpInfo,
        membersInfo: action.room.membersInfo,
      })
    }
    case 'ADD_NEW_SOCKET': {
      return Object.assign({}, state, {
        socket: action.socket,
      })
    }
    case 'ASSIGN_KP': {
      return Object.assign({}, state, {
        isKp: action.isKp
      })
    }
    case 'ASSIGN_SELF_CHANNEL_ID': {
      return Object.assign({}, state, {
        selfChannelId: action.selfChannelId,
      })
    }
    case 'UPDATE_ACTIVE_USERS': {
      return Object.assign({}, state, {
        activeUsers: action.activeUsers,
      })
    }
    default:
      return state
  }
}
