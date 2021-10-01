import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../Header'
import Register from '../ReactHookForm/Register'
import StudentManage from '../StudentManage/StudentManage'
import { path } from '../../Constant/path'
import Home from '../../pages/Home'
import Profile from './NestedRouter/Profile'
import NotFound from './NotFound'
export default function AppRouter() {
  return (
    <div id="AppRouter">
      <BrowserRouter>
        <Header />
        <Switch>
          {/* Redirect dùng để điều hướng khi ng dùng nhập sai url, hoặc kiểm tra xem có login chưa , nếu chưa chuyển qua sign-up page */}
          <Redirect from="/students" to={path.student} />
          {/* If no exact, home page should place at bottom */}
          <Route path={path.home} exact component={() => <Home />} />
          <Route path={path.register} component={Register} />
          <Route path={path.student} component={() => <StudentManage isLogged={true} />} />
          <Route path={path.profile}>
            <Profile />
          </Route>
          {/* Page not found */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
