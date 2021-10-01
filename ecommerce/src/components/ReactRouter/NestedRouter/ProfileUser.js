import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
export default function ProfileUser() {
  const params = useParams()
  console.log('params Profile user ', params)

  //Default isExact:true, because its current route.
  //If we provide a path.student will be null
  //Mat
  const match = useRouteMatch()
  console.log('match', match)
  return (
    <div>
      <h2>Profile User</h2>
    </div>
  )
}
