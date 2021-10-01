import { createSlice } from '@reduxjs/toolkit'

//Tạo ra actions
const counterSlice = createSlice({
  //Prefix cho việc tạo action type //Slicename
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increaseCount: (state, action) => {
      state.count = state.count + 1
    },
    decreaseCount: (state, action) => {
      state.count = state.count - 1
    }
  }
})

const counterReducer = counterSlice.reducer
export default counterReducer
export const { increaseCount, decreaseCount } = counterSlice.actions
