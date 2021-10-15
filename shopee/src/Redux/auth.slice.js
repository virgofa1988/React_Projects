import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authAPI from 'src/api/auth.api'
import { LocalStorage } from 'src/constants/localStorage'
import { payLoadCreator } from 'src/utils/helper'

//asyncThunk accepts action Type('auth/register) and  callback function return a promise
export const register = createAsyncThunk('auth/register', payLoadCreator(authAPI.register))

//Promise || async Function (Fulfilled/ Rejected / Pending)
export const login = createAsyncThunk('auth/login', payLoadCreator(authAPI.login))

export const logout = createAsyncThunk('auth/logout', payLoadCreator(authAPI.logout))

const handleAuthFulfilled = (state, action) => {
  console.log(action.payload)
  const { user, access_token } = action.payload.data
  state.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
  localStorage.setItem(LocalStorage.accessToken, access_token)
}
const handleLogoutFulfilled = (state, action) => {
  state.profile = {}
  localStorage.removeItem(LocalStorage.user)
  localStorage.removeItem(LocalStorage.accessToken)
}
//Reducer + Action
const auth = createSlice({
  name: 'auth',
  //Check if userLogin when 1st open the page.
  initialState: { profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {} },
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled,
    [logout.fulfilled]: handleLogoutFulfilled
  }
})

const authReducer = auth.reducer
export default authReducer
