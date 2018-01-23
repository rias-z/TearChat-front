import { combineReducers } from 'redux'


const temp = (state=[], action) => {
  switch(action.type){
    case 'TEMP':
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
  temp
})

export default reducers
