import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CheckBox from 'src/components/Checkbox/CheckBox'
import QuantityController from 'src/components/ProductQuantityController/QuantityController'
import { formatK } from 'src/utils/helper'

import * as S from './cart.style'
export default function Cart() {
  const [quantity, setQuantity] = useState(1)
  const handleQuantity = value => setQuantity(value)
  const purchases = useSelector(state => state.cartReducer.purchase)
  return (
    <div className="container">
      <div>
        <S.ProductHeader>
          <S.ProductHeaderCheckBox>
            <CheckBox />
          </S.ProductHeaderCheckBox>
          <S.ProductHeaderName>Product</S.ProductHeaderName>
          <S.ProductHeaderUnitPrice>Unit Price</S.ProductHeaderUnitPrice>
          <S.ProductHeaderQuantity>Quantity</S.ProductHeaderQuantity>
          <S.ProductHeaderPriceTotal>Amount</S.ProductHeaderPriceTotal>
          <S.ProductHeaderAction>Action</S.ProductHeaderAction>
        </S.ProductHeader>
        <S.ProductSection>
          {purchases.map(purchase => {
            return (
              <S.CartItem key={purchase._id}>
                <S.CartItemCheckBox>
                  <CheckBox />
                </S.CartItemCheckBox>
                <S.CartItemOverview>
                  <S.CartItemOverViewImage to="">
                    <img src={purchase.product.image} alt={purchase.product.name} />
                  </S.CartItemOverViewImage>
                  <S.CartItemOverViewNameWrapper>
                    <S.CartItemOverViewName to=""> {purchase.product.name}</S.CartItemOverViewName>
                  </S.CartItemOverViewNameWrapper>
                </S.CartItemOverview>
                <S.CartItemUnitPrice>
                  <span>{purchase.product.price_before_discount.toLocaleString()}</span>
                  <span>{purchase.product.price.toLocaleString()}</span>
                </S.CartItemUnitPrice>
                <S.CartItemQuantity>
                  <QuantityController
                    value={purchase.buy_count}
                    max={purchase.product.quantity}
                    onChange={handleQuantity}
                  />
                </S.CartItemQuantity>
                <S.CartItemTotalPrice>
                  <span>{(purchase.product.price * purchase.buy_count).toLocaleString()}đ</span>
                </S.CartItemTotalPrice>
                <S.CartItemAction>
                  <S.CartItemActionButton>Remove</S.CartItemActionButton>
                </S.CartItemAction>
              </S.CartItem>
            )
          })}
        </S.ProductSection>
      </div>
      <S.CartFooter>
        <S.CartFooterCheckBox>
          <CheckBox />
        </S.CartFooterCheckBox>
        <S.CartFooterButton>Select All ({purchases.length})</S.CartFooterButton>
        <S.CartFooterButton>Remove</S.CartFooterButton>
        <S.CartFooterSpace />
        <S.CartFooterPrice>
          <S.CartFooterPriceTop>
            <div>Total ( 1 Product)</div>
            <div>10000 VND</div>
          </S.CartFooterPriceTop>
          <S.CartFooterPriceBot>
            <div>Saving</div>
            <div>8000 VND</div>
          </S.CartFooterPriceBot>
        </S.CartFooterPrice>
        <S.CartFooterCheckOut>Purchase</S.CartFooterCheckOut>
      </S.CartFooter>
    </div>
  )
}
