import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { path } from 'src/constants/path'
import { useAuthenticate } from 'src/Hooks/useAuthenticate'
import useHopover from 'src/Hooks/useHopover'
import { logout } from 'src/Redux/auth.slice'

import Popover from '../Popover/Popover'
import * as S from './navbar.style'
export default function Navbar() {
  const { activePopover, showPopover, hidePopover } = useHopover()
  //Custom Hook to check isLogined
  const authenticated = useAuthenticate()
  const profile = useSelector(state => state.authReducer.profile)
  //Logout
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <S.Navbar>
      <S.NavMenu>
        {/* Login-ed */}
        {authenticated && (
          <li>
            <S.User id="user" onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://picsum.photos/200"></S.UserImage>
              <S.UserName>{profile.name || profile.email}</S.UserName>
              {/* When Hover on Profile Name */}
              <Popover active={activePopover}>
                <S.UserLink to="">My Account</S.UserLink>
                <S.UserLink to="">My Order</S.UserLink>
                <S.UserButton onClick={handleLogout}>Log out</S.UserButton>
              </Popover>
            </S.User>
          </li>
        )}
        {/* Not login */}
        {!authenticated && (
          <>
            <li>
              <S.NavLink to={path.register}>Register</S.NavLink>
            </li>
            <li>
              <S.NavLink to={path.login}>Login</S.NavLink>
            </li>
          </>
        )}
      </S.NavMenu>
    </S.Navbar>
  )
}
