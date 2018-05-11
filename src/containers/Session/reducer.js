const initialState = {
  activeUsers: [],
  isKp: false,
  isLoading: false,
  kpInfo: null,
  membersInfo: [],
  privateMessages: [],
  roomId: null,
  roomName: null,
  selfChannelId: null,
  socket: null,
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
    case 'UPDATE_MEMBERS_INFO': {
      return Object.assign({}, state, {
        membersInfo: action.membersInfo,
      })
    }
    case 'SUCCESS_INITIALIZED': {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      })
    }
    case 'SUCCESS_INITIALIZED_PRIVATE_MESSAGES': {
      return Object.assign({}, state, {
        privateMessages: action.privateMessages
      })
    }
    case 'SUCCESS_UPDATE_PRIVATE_MESSAGE': {
      return Object.assign({}, state, {
        privateMessages: [
          ...state.privateMessages,
          action.message
        ]
      })
    }
    default:
      return state
  }
}
