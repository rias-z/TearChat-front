const initialState = {
  rooms: null,
  isLoading: false
}

export default (state=initialState, action) =>{
  switch (action.type) {
    case 'SUCCESS_GET_COMPACT_ROOMS': {
      return Object.assign({}, state, {
        rooms: action.rooms,
        isLoading: action.isLoading
      })
    }
    default:
      return state
  }
}
