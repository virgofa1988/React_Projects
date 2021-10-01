import React, { useState } from 'react'
import UserProfile from './UserProfile'
// React.memo là một HOC giúp ngăn chặn việc re-render không cần thiết. Ví dụ: như component cha render => component con render hay props không thay đổi.
// React.memo mặc định sử dụng shallow comparision cho props
//Bạn phải đánh đổi tốn ram thay cho việc cải thiện hiệu suất
export default function ReactMemo() {
  const [state, setState] = useState(0)
  console.log('React Memo')
  const data = 100
  const profile = { name: 'tuan', age: 24 }
  return (
    <div>
      <div>React Memo</div>
      <button
        onClick={() => {
          setState(state + 1)
        }}
      >
        Change Count: <p>{state}</p>
      </button>
      <UserProfile data={data} profile={profile} />
    </div>
  )
}
