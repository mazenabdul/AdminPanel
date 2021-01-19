import { combineReducers } from 'redux'
import logReducer from './logReducers'
import techReducer from './techReducer'

export default combineReducers({
  log: logReducer,
  tech: techReducer
})