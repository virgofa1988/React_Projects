import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'
import PropTypes from 'prop-types'
import { path } from 'src/constants/path'
import { generateNameId } from 'src/utils/helper'
export default function ProductItem({ productDetail }) {
  console.log(productDetail)
  return (
    <S.Product>
      <Link to={path.products + `/${generateNameId(productDetail)}`}>
        <S.ProducItem>
          <S.ProductItemImage>
            <img src={productDetail.image} alt="productItem" />
          </S.ProductItemImage>
          <S.ProductItemInfo>
            {/* Product Descripton */}
            <S.ProductItemTitle>{productDetail.name}</S.ProductItemTitle>
            {/* Product Price */}
            <S.ProductItemPrice>
              <S.ProductItemOriginalPrice>
                đ {productDetail.price_before_discount.toLocaleString()}
              </S.ProductItemOriginalPrice>
              <S.ProductItemOnSalePrice>đ {productDetail.price.toLocaleString()}</S.ProductItemOnSalePrice>
            </S.ProductItemPrice>
            {/* Product MetaInfor */}
            <S.ProductItemMeta>
              <ProductRating rating={productDetail.rating} />
              <S.ProductItemSold>
                <span>{productDetail.view}K</span>
                <span>Sold: {productDetail.sold.toLocaleString()}</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfo>
        </S.ProducItem>
      </Link>
    </S.Product>
  )
}
ProductItem.propTypes = {
  productDetail: PropTypes.object
}
