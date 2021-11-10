import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import purchaseAPI from 'src/api/purchase.api'
import { payLoadCreator } from 'src/utils/helper'
// get AsyncAction from auth.slice to reset Products In cart
import { logout } from './auth.slice'

export const getPurchaseCart = createAsyncThunk('cart/getPurchaseCart', payLoadCreator(purchaseAPI.getProductInCart))

const cart = createSlice({
  name: 'cart',
  initialState: {
    purchase: []
  },
  extraReducers: {
    [getPurchaseCart.fulfilled]: (state, action) => {
      state.purchase = action.payload.data
    },
    [logout.fulfilled]: (state, action) => {
      state.purchase = []
    }
  }
})

const cartReducer = cart.reducer
export default cartReducer
