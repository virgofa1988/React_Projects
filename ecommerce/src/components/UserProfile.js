import React, { memo } from 'react'

//Cach 1
// function UserProfile(props) {
//   console.log('UserProfile')
//   return (
//     <div>
//       <div>User Profile</div>
//     </div>
//   )
// }
// export default React.memo(UserProfile)

//Cach 2 React.Memo
const UserProfile = memo(
  props => {
    console.log('UserProfile')
    console.log(props)
    return (
      <div>
        <div>User Profile</div>
        <button
          onClick={() => {
            props.handleChange(100)
          }}
        >
          Click Handle Change
        </button>
      </div>
    )
  },
  (prevProp, nextProp) => {
    return prevProp
  }
)
export default UserProfile
