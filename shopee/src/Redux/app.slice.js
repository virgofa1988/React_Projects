import { createSlice } from '@reduxjs/toolkit'

//check type of Promised to update status
const actionTypesCheck = action => action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')

const app = createSlice({
  //Name is a prefix for action name ex: app/action_name
  name: 'app',
  initialState: {
    //Sucess is 200
    status: 200
  },
  //Listen other actions which is not created from this
  // Any actions endsWith(/fulfilled or /rejected) will jump into here
  extraReducers: builder => {
    builder.addMatcher(actionTypesCheck, (state, action) => {
      console.log('App Slice - Payload', action.payload)
      state.status = action.payload.status
    })
  }
})

const appReducer = app.reducer
export default appReducer
