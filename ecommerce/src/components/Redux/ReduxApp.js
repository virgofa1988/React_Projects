import React from 'react'
import Axios from '../Axios/Axios'
import Counter from './Counter'
import ThunkProfile from './ThunkProfile'

export default function ReduxApp() {
  return (
    <div>
      <Axios />
      <Counter />
      <ThunkProfile />
    </div>
  )
}
