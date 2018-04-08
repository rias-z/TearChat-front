const initialState = {
  isEdit: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EDIT_PC_COLUMN': {
      return Object.assign({}, state, {
        isEdit: action.isEdit,
      })
    }
    default:
      return state
  }
}
