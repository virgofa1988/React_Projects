import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware, compose, createStore } from 'redux'
// import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

//Regular Redux Setup
//Redux DevTool // process.env.NODE_ENV === 'development' allow Devtool on development environment
// const composeEnhancers =
//   (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

//Redux Toolkit Setup
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})
export default store
