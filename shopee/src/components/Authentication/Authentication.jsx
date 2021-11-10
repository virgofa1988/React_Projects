import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useAuthenticate } from 'src/Hooks/useAuthenticate'
import { unauthorize } from 'src/Redux/auth.slice'
import { getPurchaseCart } from 'src/Redux/cart.slice'

export default function Authentication() {
  //This component to check
  const dispatch = useDispatch()
  const history = useHistory()
  //1- Checking status errors should be from app component
  const status = useSelector(state => state.appReducer.status)
  //2- Checking use isLogined
  const isAuthenticated = useAuthenticate()

  useEffect(() => {
    //Handle Token expire or not yet login
    if (status == 401) {
      dispatch(unauthorize())
      history.push(path.login)
    }
  }, [status])

  //2- Load Products list Into Cart When If user loged in
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getPurchaseCart())
    }
  }, [isAuthenticated])

  return null
}
