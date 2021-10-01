import * as types from '../Constant/actionTypes'
//immer npm help to mutate state object
import produce from 'immer'
//State
const initialState = {
  user: {}
}

const thunkProfileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GETUSERPAPI_FULFILLING: {
        draft.user = action.payload
        break
      }
      default:
        break
    }
  })
export default thunkProfileReducer
