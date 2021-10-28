import appReducer from './app.slice'
import authReducer from './auth.slice'
import cartReducer from './cart.slice'

export const rootReducer = {
  authReducer: authReducer,
  appReducer: appReducer,
  cartReducer: cartReducer
}
