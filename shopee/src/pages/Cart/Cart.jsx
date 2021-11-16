import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CheckBox from 'src/components/Checkbox/CheckBox'
import QuantityController from 'src/components/ProductQuantityController/QuantityController'
import { getPurchaseCart, updatePurchaseCart } from 'src/Redux/cart.slice'
import { formatK } from 'src/utils/helper'

import * as S from './cart.style'
export default function Cart() {
  const dispatch = useDispatch()
  const purchases = useSelector(state => state.cartReducer.purchase)
  //Clone the props Purchase into Local State, add the disabled and checked
  //Arrowfunction callback in useState to prevent rerender when component update
  const [localPurchase, setLocalPurchase] = useState(() =>
    createNextState(purchases, draft => {
      draft.forEach(purchase => {
        purchase.disabled = false
        purchase.checked = false
      })
    })
  )

  //Update LocalPurchase everytime API udpate
  useEffect(() => {
    setLocalPurchase(
      createNextState(purchases, draft => {
        draft.forEach(purchase => (purchase.disabled = false))
      })
    )
  }, [purchases])

  const handleInputQuantity = indexPurchase => value => {
    const newLocalPurchase = createNextState(localPurchase, draft => {
      draft[indexPurchase].buy_count = value
    })
    setLocalPurchase(newLocalPurchase)
  }
  //Update PurchaseAPI when user change qty and blur out the input
  const handleBlur = indexPurchase => async value => {
    //get the Purchase Item on Blur
    const purchaseItem = localPurchase[indexPurchase]
    //Update disable ="true", to not user to change quantity in Input when calling API
    setLocalPurchase(localPurchase =>
      createNextState(localPurchase, draft => {
        draft[indexPurchase].disabled = true
      })
    )
    const body = {
      product_id: purchaseItem.product._id,
      buy_count: value
    }
    //unwrapResult not allow running code to next line
    await dispatch(updatePurchaseCart(body)).then(unwrapResult)
    //Render CartPuchase after update
    await dispatch(getPurchaseCart()).then(unwrapResult)
    //after Rerender CartPuchase, update disable of item = false => allow use to update new QTY

    setLocalPurchase(localPurchase =>
      createNextState(localPurchase, draft => {
        draft[indexPurchase].disabled = false
      })
    )
  }

  const handleIncreaseDecreaseQty = indexPurchase => async value => {
    const purchaseItem = localPurchase[indexPurchase]
    setLocalPurchase(localPurchase =>
      createNextState(localPurchase, draft => {
        draft[indexPurchase].disabled = true
      })
    )
    const body = {
      product_id: purchaseItem.product._id,
      buy_count: value
    }
    await dispatch(updatePurchaseCart(body)).then(unwrapResult)
    await dispatch(getPurchaseCart()).then(unwrapResult)
  }
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
          {localPurchase.map((purchase, index) => {
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
                    onInput={handleInputQuantity(index)}
                    onIncrease={handleIncreaseDecreaseQty(index)}
                    onDecrease={handleIncreaseDecreaseQty(index)}
                    disabled={purchase.disabled}
                    onBlur={handleBlur(index)}
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
