//Redux toolkit
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { rootReducer } from './rootReducer'
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
})
export default store
