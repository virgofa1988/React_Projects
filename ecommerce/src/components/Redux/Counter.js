import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import { decreaseCount, increaseCount } from '../../actions/counter.action'
import { decreaseCount, increaseCount } from './counter.slice'
export default function Counter() {
  const dispatch = useDispatch()
  //connect reducer
  const countReducer = useSelector(state => state.counterReducer)

  return (
    <div>
      <h2>Count: {countReducer.count}</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(increaseCount())
        }}
      >
        Click +
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(decreaseCount())
        }}
      >
        Click -
      </button>
    </div>
  )
}
