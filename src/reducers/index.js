import { combineReducers } from 'redux'
import logReducer from './logReducers'

export default combineReducers({
  log: logReducer
})