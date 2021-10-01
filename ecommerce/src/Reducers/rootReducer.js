// import { combineReducers } from 'redux'
// import counterReducer from './counter.reducer'
import counterReducer from '../components/Redux/counter.slice'
import thunkProfileReducer from './thunkProfile.reducer'

//Main Reducer Regular Redux
// const rootReducer = combineReducers({
//   counterReducer,
//   thunkProfileReducer
// })

//Main Reducer Redux ToolKit
const rootReducer = {
  counterReducer,
  thunkProfileReducer
}

export default rootReducer
