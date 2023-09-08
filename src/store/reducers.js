import { combineReducers } from "redux";
import auth from './auth/reducer'
import character from './character/reducer'

const reducers = combineReducers({
  auth,
  character
})

export default reducers