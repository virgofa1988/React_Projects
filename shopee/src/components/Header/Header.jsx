import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { SVGCartIcon, SVGSearchIcon, SVGShopeeLogo } from 'src/assets/svgs/svg'
import { path } from 'src/constants/path'
import useHopover from 'src/Hooks/useHopover'
import useQuery from 'src/Hooks/useQuery'
import qs from 'query-string'
import Navbar from '../Navbar/Navbar'
import Popover from '../Popover/Popover'
import * as S from './header.style'
export default function Header() {
  const { activePopover, showPopover, hidePopover } = useHopover()
  const { control, getValues, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: ''
    }
  })
  const query = useQuery()
  const history = useHistory()
  const searchByNameAPI = data => {
    const _filters = { ...query, ...data }
    console.log('searchByNameAPI ', _filters)
    history.push(path.home + `?${qs.stringify(_filters)}`)
  }
  //when loading url or share  url, if query from URL has name search, need to fill search input with that search key
  useEffect(() => {
    const { name = '' } = query
    setValue('name', name)
  }, [query])
  return (
    <S.StyledHeader>
      <div className="container">
        <Navbar />
        {/* Search Bar on Header */}
        <S.SearchWrap>
          {/* Logo */}
          <S.Logo to="/">
            <SVGShopeeLogo />
          </S.Logo>

          {/* Search Form */}
          <S.StyledForm onSubmit={handleSubmit(searchByNameAPI)}>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <S.StyledInput
                  placeholder="Search Products"
                  onChange={value => {
                    const data = { name: value.target.value }
                    searchByNameAPI(data)
                    field.onChange(value)
                  }}
                  value={getValues('name')}
                />
              )}
            />
            <S.StyledButton type="submit">
              <SVGSearchIcon />
            </S.StyledButton>
          </S.StyledForm>

          {/* Cart */}
          <S.Cart onMouseEnter={showPopover} onMouseLeave={hidePopover}>
            <S.CartContainer>
              {/* Cart Icon with Badge */}
              <S.CartIcon to="">
                <SVGCartIcon />
                <S.CartNumberBadge>1</S.CartNumberBadge>
              </S.CartIcon>
              {/* Cart Popover using Popover again */}
              <Popover active={activePopover}>
                <S.PopoverContent>
                  {/* Popover Header */}
                  <S.PopoverTitle>Products List</S.PopoverTitle>
                  {/* Popover Product Cart */}
                  <S.MiniProductCart>
                    <S.MiniProductCartImg
                      src="https://cf.shopee.vn/file/5dca5671088b750d6c578184f816d9b0_tn"
                      alt="product"
                    />
                    <S.MiniCartTitle>Product in Cart 1</S.MiniCartTitle>
                    <S.MiniProductPrice>$30</S.MiniProductPrice>
                  </S.MiniProductCart>
                  {/* Popover Product Footer */}
                  <S.PopoverFooter>
                    <S.MoreProduct>
                      <span>One product in cart</span>
                    </S.MoreProduct>
                    <S.ButtonShowCart to="">View Cart</S.ButtonShowCart>
                  </S.PopoverFooter>
                </S.PopoverContent>
              </Popover>
            </S.CartContainer>
          </S.Cart>
        </S.SearchWrap>
      </div>
    </S.StyledHeader>
  )
}
