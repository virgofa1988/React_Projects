import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CheckBox from 'src/components/Checkbox/CheckBox'
import QuantityController from 'src/components/ProductQuantityController/QuantityController'
import { buyPurchaseCart, deletePurchaseCart, getPurchaseCart, updatePurchaseCart } from 'src/Redux/cart.slice'

//Keyby from Lodash turn array to object with a key you choose
import keyBy from 'lodash/keyBy'
import * as S from './cart.style'
import { toast } from 'react-toastify'
export default function Cart() {
  const dispatch = useDispatch()
  //Props Purchase from reducer
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
  console.log(localPurchase)
  //Check if all Item checked || true or false
  const isCheckedAll = localPurchase.every(purchase => purchase.checked)
  //Filter checked Purchase
  const checkedPurchase = localPurchase.filter(purchase => purchase.checked)
  //Count quantity of checked purchase
  const checkedPurchasesQty = checkedPurchase.length
  //count total price of checked item
  const checkedPurchaseTotalAmount = checkedPurchase.reduce((total, purchase) => {
    return total + purchase.price * purchase.buy_count
  }, 0)
  //count total saving price of checked item
  const checkedPurchaseTotalSaveAmount = checkedPurchase.reduce((total, purchase) => {
    return total + (purchase.price_before_discount - purchase.price) * purchase.buy_count
  }, 0)

  //Update LocalPurchase everytime API udpate
  useEffect(() => {
    setLocalPurchase(localPurchase => {
      const localPurchaseObject = keyBy(localPurchase, '_id')
      // console.log('Local Purchase Object', localPurchaseObject)
      return createNextState(purchases, draft => {
        draft.forEach(purchase => {
          purchase.disabled = false
          purchase.checked = Boolean(localPurchaseObject[purchase._id]?.checked)
        })
      })
    })
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
  //Update Qty when use increase or decrease
  const handleIncreaseDecreaseQty = indexPurchase => async value => {
    const purchaseItem = localPurchase[indexPurchase]
    //Update LocalPurchase disable = true
    setLocalPurchase(localPurchase =>
      createNextState(localPurchase, draft => {
        draft[indexPurchase].disabled = true
      })
    )
    const body = {
      product_id: purchaseItem.product._id,
      buy_count: value
    }
    // Call API to update qty
    await dispatch(updatePurchaseCart(body)).then(unwrapResult)
    // Call API to update Redux
    await dispatch(getPurchaseCart()).then(unwrapResult)
  }
  //Handle Checkbox for each item
  const handleCheckBox = indexPurchase => value => {
    setLocalPurchase(localPurchase =>
      createNextState(localPurchase, draft => {
        draft[indexPurchase].checked = value
      })
    )
  }

  //Handle CheckAll || based on flag isCheckedAll
  const handleCheckAll = () => {
    setLocalPurchase(localPurchase =>
      createNextState(localPurchase, draft => {
        draft.forEach(purchase => {
          purchase.checked = !isCheckedAll
        })
      })
    )
  }

  //Handle Delete Each Purchase
  const handleDeletePurchase = indexPurchase => async () => {
    //Get the Id of delete item
    const purchaseId = localPurchase[indexPurchase]._id
    //Call delete API with body is [id]
    await dispatch(deletePurchaseCart([purchaseId])).then(unwrapResult)
    //Rerender the purchase Cart
    await dispatch(getPurchaseCart()).then(unwrapResult)
    //Toasting a message
    toast.info(`Deleted item successfully!`, {
      position: 'top-center',
      theme: 'colored'
    })
  }
  //Handle Delete Multi-purchase
  const handleDeleteMultiPurchase = async () => {
    //Get the Id of delete item checked
    const purchaseId = checkedPurchase.map(purchase => purchase._id)
    //Call delete API with body is [id]
    await dispatch(deletePurchaseCart(purchaseId)).then(unwrapResult)
    //Rerender the purchase Cart
    await dispatch(getPurchaseCart()).then(unwrapResult)
    //Toasting a message
    toast.info(`Deleted ${purchaseId.length} item successfully!`, {
      position: 'top-center',
      theme: 'colored'
    })
  }

  //Handle Buy Purchase
  const handleBuyPurchase = async () => {
    if (checkedPurchase.length > 0) {
      const buyItems = checkedPurchase.map(purchase => {
        return { product_id: purchase.product._id, buy_count: purchase.buy_count }
      })
      await dispatch(buyPurchaseCart(buyItems)).then(unwrapResult)
      await dispatch(getPurchaseCart()).then(unwrapResult)
      toast.success(`Purchased item successfully!`, {
        position: 'top-center',
        theme: 'colored'
      })
    }
  }
  return (
    <div className="container">
      <div>
        <S.ProductHeader>
          <S.ProductHeaderCheckBox>
            <CheckBox onChange={handleCheckAll} checked={isCheckedAll} />
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
                  <CheckBox onChange={handleCheckBox(index)} checked={purchase.checked} />
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
                  <S.CartItemActionButton onClick={handleDeletePurchase(index)}>Remove</S.CartItemActionButton>
                </S.CartItemAction>
              </S.CartItem>
            )
          })}
        </S.ProductSection>
      </div>
      <S.CartFooter>
        <S.CartFooterCheckBox>
          <CheckBox onChange={handleCheckAll} checked={isCheckedAll} />
        </S.CartFooterCheckBox>
        <S.CartFooterButton onClick={handleCheckAll}>Select All ({purchases.length})</S.CartFooterButton>
        <S.CartFooterButton onClick={handleDeleteMultiPurchase}>Remove</S.CartFooterButton>
        <S.CartFooterSpace />
        <S.CartFooterPrice>
          <S.CartFooterPriceTop>
            <div>Total ( {checkedPurchasesQty} Product)</div>
            <div>{checkedPurchaseTotalAmount.toLocaleString()} VND</div>
          </S.CartFooterPriceTop>
          <S.CartFooterPriceBot>
            <div>Saving</div>
            <div>{checkedPurchaseTotalSaveAmount.toLocaleString()} VND</div>
          </S.CartFooterPriceBot>
        </S.CartFooterPrice>
        <S.CartFooterCheckOut onClick={handleBuyPurchase}>Purchase</S.CartFooterCheckOut>
      </S.CartFooter>
    </div>
  )
}
