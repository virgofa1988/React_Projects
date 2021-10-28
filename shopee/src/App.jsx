import React, { useEffect } from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import Routes from './Routes'
//Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { unauthorize } from './Redux/auth.slice'
import { path } from './constants/path'
function App() {
  //Checking status errors should be from app component
  const status = useSelector(state => state.appReducer.status)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    //Handle Token expire or not yet login
    if (status == 401) {
      dispatch(unauthorize())
      history.push(path.login)
    }
  }, [status])
  return (
    <div className="App">
      <Routes />
      <ToastContainer />
    </div>
  )
}

export default App
