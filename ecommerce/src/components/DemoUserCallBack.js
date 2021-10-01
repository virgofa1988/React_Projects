import React, { useCallback, useState } from 'react'
import UserProfile from './UserProfile'
export default function DemoUserCallBack() {
  const [state, setState] = useState(0)
  const handleChange = useCallback(value => {
    console.log('value', value)
  }, [])
  return (
    <div>
      <p>useCallBack</p>
      <p>{state}</p>
      <button
        onClick={() => {
          setState(state => state + 1)
        }}
      >
        Change State
      </button>
      <UserProfile handleChange={handleChange} />
    </div>
  )
}
