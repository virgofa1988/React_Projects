import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { path } from 'src/constants/path'
import { useAuthenticate } from 'src/Hooks/useAuthenticate'
import * as S from './navbar.style'
export default function Navbar() {
  //State to control hover on profile
  const [activePopover,setActivePopover] = useState(false)
  const showPopover = ()=>{setActivePopover(true)}
  const hidePopover = ()=>{setActivePopover(false)}
  //Custom Hook to check isLogined
  const authenticated =  useAuthenticate()
  const profile = useSelector(state => state.authReducer.profile)
  return (
    <S.Navbar>
      <S.NavMenu>
        {/* Logined */}
        {authenticated && (
          <li>
            <S.User id="user" onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src='https://picsum.photos/200'></S.UserImage>
              <S.UserName>{profile.name || profile.email}</S.UserName>
               {/* When Hover on Profile Name */}
            {activePopover && (
              <S.Drawer>
                <S.PopoverArrow/>
                <S.PopoverContent>
                  <S.UserLink to="">My Account</S.UserLink>
                  <S.UserLink to="">My Order</S.UserLink>
                  <S.UserButton>Log out</S.UserButton>
                </S.PopoverContent>
              </S.Drawer>
            )}
            </S.User>           

          </li>
        )}
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
