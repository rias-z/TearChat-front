const initialState = {
  isLoading: false,
  pcList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED': {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      })
    }
    case 'SUCCESS_INITIALIZED_PC_LIST': {
      return Object.assign({}, state, {
        pcList: action.pcList
      })
    }
    case 'SUCCESS_ADD_PC_LIST': {
      return Object.assign({}, state, {
        pcList: [
          ...state.pcList,
          action.newPc
        ]
      })
    }
    default:
      return state
  }
}

