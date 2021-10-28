import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import purchaseAPI from 'src/api/purchase.api'
import { payLoadCreator } from 'src/utils/helper'

export const getPurchaseCart = createAsyncThunk('cart/getPurchaseCart', payLoadCreator(purchaseAPI.getProductInCart))

const cart = createSlice({
  name: 'cart',
  initialState: {
    purchase: []
  },
  extraReducers: {
    [getPurchaseCart.fulfilled]: (state, action) => {
      state.purchase = action.payload.data
    }
  }
})

const cartReducer = cart.reducer
export default cartReducer
