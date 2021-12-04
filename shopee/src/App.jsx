import React, { useEffect } from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import Routes from './Routes'
//Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Authentication from './components/Authentication/Authentication'
function App() {
  return (
    <div className="App">
      {/*1. Authentication help to load Product in Cart if user Loged in 
      2.  //Handle Token expire or not yet login
      */}
      <Authentication />
      <Routes />
      <ToastContainer />
    </div>
  )
}
export default App
