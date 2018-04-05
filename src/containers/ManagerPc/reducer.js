const initialState = {
  isLoading: false,
  pcInfoList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED': {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      })
    }
    case 'SUCCESS_SET_PC_INFO_LIST': {
      return Object.assign({}, state, {
        pcInfoList: action.pcInfoList
      })
    }
    case 'SUCCESS_ADD_PC_LIST': {
      return Object.assign({}, state, {
        pcInfoList: [
          ...state.pcInfoList,
          action.newPc
        ]
      })
    }
    default:
      return state
  }
}

