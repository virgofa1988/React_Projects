import React from 'react'
import { SVGCartIcon, SVGSearchIcon, SVGShopeeLogo } from 'src/assets/svgs/svg'
import useHopover from 'src/Hooks/useHopover'
import Navbar from '../Navbar/Navbar'
import Popover from '../Popover/Popover'
import * as S from './header.style'
export default function Header() {
  const { activePopover, showPopover, hidePopover } = useHopover()
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
          <S.StyledForm>
            <S.StyledInput placeholder="Search Products" />
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
