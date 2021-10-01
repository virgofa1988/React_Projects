import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUserAPI_Fulfilled_Async } from '../../actions/thunkProfile.action'

export default function ThunkProfile() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.thunkProfileReducer)
  console.log(user)
  //Call API to get User infor and push to reducer
  useEffect(() => {
    //Way 1 - call currying calback
    // getUserAPI_Fulfilled_Async()(dispatch)

    //Way 2- Redux Thunk
    dispatch(getUserAPI_Fulfilled_Async())
  }, [dispatch])
  return (
    <div>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age :{user.age}</li>
      </ul>
    </div>
  )
}
