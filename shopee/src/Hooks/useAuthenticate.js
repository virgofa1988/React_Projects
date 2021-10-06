import { useSelector } from 'react-redux'

export const useAuthenticate = () => {
  return useSelector(state => Boolean(state.authReducer.profile._id))
}
