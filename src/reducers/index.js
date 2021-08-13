import { combineReducers, applyMiddleware } from 'redux'
import { createStore } from 'redux'
import user from './user'
import temp from './temp'
import status from './status'
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    user,
    temp,
    status
  }), applyMiddleware(thunk))

export default store