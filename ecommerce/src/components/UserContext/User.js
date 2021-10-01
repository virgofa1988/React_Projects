import React from 'react'
import { useUser } from './AppContext'
import UserProfile from './UserProfile'

export default function User() {
  //Lấy Shared State về sử dụng
  const user = useUser()
  return (
    <div>
      <div className="User">
        <ul>
          <li>User name is :{user.name}</li>
          <li>Age name is : {user.age}</li>
        </ul>
      </div>
      <UserProfile />
    </div>
  )
}
