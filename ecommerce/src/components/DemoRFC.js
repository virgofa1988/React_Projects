import React, { useEffect, useState } from 'react'

export default function DemoRFC() {
  const [profile, setProfile] = useState({ name: 'Tuan', age: 24 })

  const initialUserList = () => {
    console.log('initialUserList')
    const result = []
    for (let i = 0; i < 10; i++) {
      result.push(`User ${i}`)
    }
    return result
  }
  const [list] = useState(initialUserList)
  const changeAge = () => {
    setProfile(prevProfile => ({ ...profile, age: prevProfile.age + 1 }))
    setProfile(prevProfile => ({ ...profile, age: prevProfile.age + 1 }))
  }

  useEffect(() => {
    console.log('Effect didmount')
  }, [])
  useEffect(() => {
    console.log('Effect')
    //Component will unmount
    return () => {
      console.log('clean')
    }
  })
  return (
    <div>
      <button onClick={changeAge}>Change Age</button>
      <p>{profile.name}</p>
      <p>{profile.age}</p>
      <ul>
        {list.map((user, index) => {
          return <li key={index}>{user}</li>
        })}
      </ul>
    </div>
  )
}
