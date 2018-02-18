const initialState = {
  rooms: null,
  isLoading: false,
  error_message: null
}

export default (state=initialState, action) =>{
  switch (action.type) {
    case 'SUCCESS_GET_OMITTED_ROOMS': {
      return Object.assign({}, state, {
        rooms: action.rooms,
        isLoading: action.isLoading
      })
    }
    case 'FAILED_ENTERED_ROOM': {
      return Object.assign({}, state, {
        error_message: action.error_message
      })
    }
    default:
      return state
  }
}
