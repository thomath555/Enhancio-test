import { combineReducers } from 'redux'
/* --------------------------------------------- */
import fieldReducer from './field.reducer'
/* --------------------------------------------- */
const rootReducer = combineReducers({
  fieldReducer,
})
/* --------------------------------------------- */
export default rootReducer
/* --------------------------------------------- */