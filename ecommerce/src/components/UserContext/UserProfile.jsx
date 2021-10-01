import React from 'react'
import { useUser } from './AppContext'
export default function UserProfile() {
  //Lấy shared state về sử dụng của
  const user = useUser()
  return (
    <div>
      <ul>
        <li>User Profile Name: {user.name} </li>
        <li>User Profile Age: {user.age} </li>
      </ul>
    </div>
  )
}
