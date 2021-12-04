import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import purchaseAPI from 'src/api/purchase.api'
import { payLoadCreator } from 'src/utils/helper'
// get AsyncAction from auth.slice to reset Products In cart
import { logout } from './auth.slice'

export const getPurchaseCart = createAsyncThunk('cart/getPurchaseCart', payLoadCreator(purchaseAPI.getProductInCart))

export const updatePurchaseCart = createAsyncThunk('cart/updatePurchase', payLoadCreator(purchaseAPI.updatePurchase))

export const deletePurchaseCart = createAsyncThunk('cart/deletePurchase', payLoadCreator(purchaseAPI.deletePurchase))

export const buyPurchaseCart = createAsyncThunk('cart/buyPurchase', payLoadCreator(purchaseAPI.buyPurchase))

const cart = createSlice({
  name: 'cart',
  initialState: {
    purchase: []
  },
  extraReducers: {
    // [getPurchaseCart.pending]: (state, action) => (state.loading = true),
    [getPurchaseCart.fulfilled]: (state, action) => {
      state.purchase = action.payload.data
      state.loading = false
    },
    [logout.fulfilled]: (state, action) => {
      state.purchase = []
    }
  }
})

const cartReducer = cart.reducer
export default cartReducer
