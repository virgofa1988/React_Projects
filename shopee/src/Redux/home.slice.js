import { createAsyncThunk } from '@reduxjs/toolkit'
import categoriesAPI from 'src/api/categories.api'
import productsAPI from 'src/api/products.api'
import { payLoadCreator } from 'src/utils/helper'

//AsyncAction
export const getCategories = createAsyncThunk('home/getCategories', payLoadCreator(categoriesAPI.getCategories))

export const getProducts = createAsyncThunk('home/getProducts', payLoadCreator(productsAPI.getProductsAPI))
