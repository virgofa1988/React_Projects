import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthenticatedGuard from './components/Guards/AuthenticatedGuard'
import UnauthenticatedGuard from './components/Guards/UnauthenticatedGuard'
import { path } from './constants/path'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import User from './pages/User/User'
export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>
      <Route path={path.productDetail}>
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      </Route>
      <Route path={path.login}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Login">
            <Login />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.register}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Sign-up">
            <Register />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.user}>
        <AuthenticatedGuard>
          <MainLayout>
            <User />
          </MainLayout>
        </AuthenticatedGuard>
      </Route>

      {/* Page not found here */}
      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  )
}
