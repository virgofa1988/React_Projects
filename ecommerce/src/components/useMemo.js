import React, { useMemo, useState } from 'react'
import UserProfile from './UserProfile'
//useMemo mục đích cũng để ngăn chặn render không cần thiết, nhưng áp dụng cho data gửi vào component con
//Nó khác với React.memo là nó dùng để áp dụng cho component con
//Ở dây data, profile gửi vào UserProfile component sẽ tạo mới mỗi làn state thay đổi. Dùng usememo cho profile
export default function UseMemo() {
  const [state, setState] = useState(0)
  console.log('userMemo')
  const data = 100
  const profile = useMemo(() => ({ name: 'tuan', age: 24 }), [])
  return (
    <div>
      <div>userMemo</div>
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
