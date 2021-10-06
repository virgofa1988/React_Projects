import React from 'react'
import {Switch,Route} from 'react-router-dom'
import { path } from './constants/path'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Home/>
        </MainLayout>
      </Route>
      <Route path={path.login}>
        <RegisterLayout title='Login'>
            <Login/>
        </RegisterLayout>
      </Route>
      <Route  path={path.register}>
        <RegisterLayout title='Sign-up'>
          <Register/>
        </RegisterLayout>
      </Route>
  
      {/* Page not found here */}
      <Route path={path.notFound}><NotFound/></Route>
    </Switch>
  )
}
