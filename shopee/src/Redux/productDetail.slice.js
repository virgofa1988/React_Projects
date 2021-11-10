import { createAsyncThunk } from '@reduxjs/toolkit'

import productsAPI from 'src/api/products.api'
import purchaseAPI from 'src/api/purchase.api'
import { payLoadCreator } from 'src/utils/helper'

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  payLoadCreator(productsAPI.getProductDetailAPI)
)

//Add To Cart Async Thunk
export const addToCart = createAsyncThunk('productDetail/addToCart', payLoadCreator(purchaseAPI.addToCart))

// export const addToCart = createAsyncThunk('productDetail/addToCart', async (data, thunkAPI) => {
//   try {
//     const response = await purchaseAPI.addToCart(data)
//     return response
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error)
//   }
// })
