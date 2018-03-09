export const successInitializedRoomInfo = (room) => {
  return {
    type: 'SUCCESS_INITIALIZED_ROOM_INFO',
    room: room,
    isLoading: true,
  }
}

export const addNewSocket = (socket) => {
  return {
    type: 'ADD_NEW_SOCKET',
    socket: socket,
  }
}

export const assignKp = (bool) => {
  return {
    type: 'ASSIGN_KP',
    isKp: bool,
  }
}

export const assignSelfChannelId = (selfChannelId) => {
  return {
    type: 'ASSIGN_SELF_CHANNEL_ID',
    selfChannelId: selfChannelId,
  }
}

export const updateActiveUsers = (activeUsers) => {
  return {
    type: 'UPDATE_ACTIVE_USERS',
    activeUsers: activeUsers,
  }
}
