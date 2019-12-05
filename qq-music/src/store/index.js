import recommend from './recommend.redux'
import rank from './rank.redux'
import {combineReducers} from 'redux'
export default combineReducers({recommend, rank})