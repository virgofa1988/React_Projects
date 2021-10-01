import React from 'react'
import UserProfile from './UserProfile'
// Higher Order Component(HOC)  là kỹ thuật nâng cao của react nhằm dùng lại logic của component.
// HOC là một function nhận vào một component và return một component mới
//Thường được dùng trong các thư viện bên thứ 3 như Redux

//Currying
const connect = Component => props => {
  const data = [1, 2, 3, 4, 5]
  return <Component {...props} data={data} />
}
//Use HOC
const UserProfileWrapper = connect(UserProfile)
export default function HOC() {
  return (
    <div>
      <p>Hello HOC</p>
      <UserProfileWrapper />
    </div>
  )
}
