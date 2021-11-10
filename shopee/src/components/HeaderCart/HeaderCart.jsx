import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import * as S from './headerCart.style'
import { SVGShopeeLogo, SVGSearchIcon } from 'src/assets/svgs/svg'
import { path } from 'src/constants/path'
import { useHistory } from 'react-router'
export default function HeaderCart() {
  //State to store search keywords from user
  const [searchValue, setSearchValue] = useState()
  const history = useHistory()

  //Search function
  const search = event => {
    event.preventDefault()
    //Only search if searchValue !== ""
    const _value = searchValue.trim()
    if (_value !== '') {
      history.push(path.home + `?name=${searchValue}`)
    }
  }

  //Handle value input
  const handleChangeSearch = event => setSearchValue(event.target.value)

  return (
    <S.Header>
      <S.Navbar>
        <div className="container">
          <Navbar />
        </div>
      </S.Navbar>
      <div className="container">
        <S.SearchWrap>
          <S.Logo to={path.home}>
            <SVGShopeeLogo />
            <S.LogoPageName>Cart</S.LogoPageName>
          </S.Logo>
          <S.Form>
            <S.Input type="text" placeholder="search items in cart" onChange={handleChangeSearch} />
            <S.ButtonSearch onClick={search}>
              <SVGSearchIcon />
            </S.ButtonSearch>
          </S.Form>
        </S.SearchWrap>
      </div>
    </S.Header>
  )
}
