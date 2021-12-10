import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { SVGEditIcon } from 'src/assets/svgs/svg'
import { path } from 'src/constants/path'
import Password from './Password/Password'
import Profile from './Profile/Profile'
import Purchase from './Purchase/Purchase'
import * as S from './user.style'

export default function User() {
  return (
    <div>
      <S.Container className="container">
        <S.Sidebar>
          <S.Brief>
            <S.BriefAvatar to={path.profile}>
              <img src="https://picsum.photos/200" alt="avatarImg" />
            </S.BriefAvatar>
            <S.BriefRight>
              <S.BriefUserName>Jay Nguyen</S.BriefUserName>
              <S.BriefEdit to={path.profile}>
                <SVGEditIcon />
                Edit Profile
              </S.BriefEdit>
            </S.BriefRight>
          </S.Brief>
          <S.SideBarMenu>
            <S.SideBarMenuItem to={path.profile}>
              <S.SideBarMenuIcon>
                <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="sideBarMenuIcon" />
              </S.SideBarMenuIcon>
              My account
            </S.SideBarMenuItem>
            <S.SideBarMenuItem to={path.password}>
              <S.SideBarMenuIcon>
                <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="sideBarMenuIcon" />
              </S.SideBarMenuIcon>
              Change password
            </S.SideBarMenuItem>
            <S.SideBarMenuItem to={path.purchase}>
              <S.SideBarMenuIcon>
                <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="sideBarMenuIcon" />
              </S.SideBarMenuIcon>
              My orders
            </S.SideBarMenuItem>
          </S.SideBarMenu>
        </S.Sidebar>
        <S.Main>
          <Switch>
            <Route path={path.user} exact>
              <Redirect to={path.profile} />
            </Route>
            <Route path={path.profile}>
              <Profile />
            </Route>
            <Route path={path.password}>
              <Password />
            </Route>
            <Route path={path.purchase}>
              <Purchase />
            </Route>
          </Switch>
        </S.Main>
      </S.Container>
    </div>
  )
}
