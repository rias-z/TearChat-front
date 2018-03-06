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

export const updateActiveUsers = (activeUsers) => {
  return {
    type: 'UPDATE_ACTIVE_USERS',
    activeUsers: activeUsers,
  }
}
