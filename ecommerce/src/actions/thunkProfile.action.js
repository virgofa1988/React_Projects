import * as types from '../Constant/actionTypes'
import { getUserAPI } from '../data/api'

//No Async Actions
export const getUserFulfilled = payload => {
  return { type: types.GETUSERPAPI_FULFILLING, payload }
}

export const getUserRejected = payload => {
  return { type: types.GETUSERPAPI_REJECT, payload }
}

export const getUserPending = () => {
  return { type: types.GETUSERPAPI_PENDING }
}

// Async Actions, need use Redux Thunk // currying or HOC
export const getUserAPI_Fulfilled_Async = () => dispatch => {
  getUserAPI()
    .then(result => {
      // console.log(result)
      dispatch(getUserFulfilled(result))
    })
    .catch(err => {
      console.log(err)
    })
}
