const initialState = {
  selectFkPcId: -1,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECT_FK_PC_ID': {
      return Object.assign({}, state, {
        selectFkPcId: action.selectFkPcId,
      })
    }
    default:
      return state
  }
}
