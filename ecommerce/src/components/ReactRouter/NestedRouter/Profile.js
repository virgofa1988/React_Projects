import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import { path } from '../../../Constant/path'
import NotFound from '../NotFound'
import ProfilePurchase from './ProfilePurchase'
import ProfileUser from './ProfileUser'
export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          <NavLink to={path.profileUser + '/123'}>ProfileUser</NavLink>
        </li>
        <li>
          <NavLink to={path.profilePurchase}>ProfilePurchase</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={path.profileUser + '/:id'}>
          <ProfileUser />
        </Route>
        <Route path={path.profilePurchase}>
          <ProfilePurchase />
        </Route>
        {/* Default will profile blank page, NO COMPONENT PASSED */}
        <Route path={path.profile} exact></Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}
