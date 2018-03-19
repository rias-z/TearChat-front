import { union } from 'lodash'


const initialState = {
  ids: ['public'],
  nextIds: [],
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TABLE': {
      return {
        ids: union([...state.ids, action.id]),
        nextIds: union([...state.nextIds, action.id]),
      }
    }
    case 'REMOVE_TABLE': {
      const id = action.id
      return {
        ids: state.ids.filter(v => id !== v),
        nextIds: state.ids.filter(v => id !== v),
      }
    }
    case 'SET_TABLE':
      return { ...state, nextIds: action.ids }
    default:
      return state
  }
}
