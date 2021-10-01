// import * as types from '../Constant/actionTypes'
import { createAction } from '@reduxjs/toolkit'
//Regular Redux
// export const increaseCount = () => {
//   return { type: types.INCREASE }
// }
// export const decreaseCount = () => {
//   return { type: types.DECREASE }
// }

//Redux Toolkit actions //Define Actions in toolkit
export const increaseCount = createAction('counter/increase')
export const decreaseCount = createAction('counter/decrease')
