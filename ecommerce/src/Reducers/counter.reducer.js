// import * as types from '../Constant/actionTypes'
//Start Redux Toolkit
import { createReducer } from '@reduxjs/toolkit'

// import { increaseCount, decreaseCount } from '../actions/counter.action'

//createSlice
import { increaseCount, decreaseCount } from '../components/Redux/counter.slice'
const initialState = {
  count: 0
}

//Redux toolkit reducer way 1
// const counterReducer = createReducer(initialState, {
//   //Actions in way 1
//   // 'counter/increase': (state, action) => {
//   //   state.count = state.count + 1
//   // },
//   // 'counter/decrease': (state, action) => {
//   //   state.count = state.count - 1
//   // }
//   //Actions in way 2
//   [increaseCount]: (state, action) => {
//     state.count = state.count + 1
//   },
//   [decreaseCount]: (state, action) => {
//     state.count = state.count - 1
//   }
// })
//Redux toolit Reducer way 2
const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(increaseCount, (state, action) => {
      state.count = state.count + 1
    })
    .addCase(decreaseCount, (state, action) => {
      state.count = state.count - 1
    })
    .addMatcher(
      action => {
        //Hàm addMatcher hỗ trợ kiểm tra xem action có chưa hành động tương ứng chuỗi trong endwiths ko
        return action.type.endsWith('counter/increase')
      },
      (state, action) => {
        console.log('do some logic here')
      }
    )
})

//-------End Redux Toolkit-------------

//Regular Reducer
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.INCREASE: {
//       console.log(action.type)
//       return { count: state.count + 1 }
//     }
//     case types.DECREASE: {
//       console.log(action.type)
//       return { count: state.count - 1 }
//     }
//     default:
//       return state
//   }
// }

export default counterReducer
