import React from 'react'
import { SVGEditIcon } from 'src/assets/svgs/svg'
import { path } from 'src/constants/path'
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
        <S.Main></S.Main>
      </S.Container>
    </div>
  )
}
