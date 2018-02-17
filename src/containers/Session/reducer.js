const initialState = {
  isLoading: false
}

export default (state=initialState, action) =>{
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_ROOM_INFO': {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        room_id: action.room_info.room_id,
        room_name: action.room_info.room_name
      })
    }
    default:
      return state
  }
}
