const initialState = {
  pcsInfo: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_PCS_INFO': {
      return Object.assign({}, state, {
        pcsInfo: action.pcsInfo,
      })
    }
    case 'SUCCESS_ADD_PC': {
      return Object.assign({}, state, {
        pcsInfo: [
          ...state.pcsInfo,
          action.pcInfo
        ]
      })
    }
    default:
      return state
  }
}
