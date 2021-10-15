import React from 'react'
import { SGVNextIcon, SVGPrevIcon } from 'src/assets/svgs/svg'
import Pagination from '../Pagination/Pagination'
import ProductItem from '../ProductItem/ProductItem'
import * as S from './searchItemResult.style'
import PropTypes from 'prop-types'
export default function SearchItemResult({ productList }) {
  const { products, pagination } = productList
  console.log(products, pagination)
  return (
    <div>
      <S.SortBar>
        {/* Sort Bar */}
        <S.SortBarLabel>Sort by</S.SortBarLabel>
        <S.SortByOptions>
          <S.SortByOptionsItem className="active">Popular</S.SortByOptionsItem>
          <S.SortByOptionsItem>New arrival</S.SortByOptionsItem>
          <S.SortByOptionsItem>Most sale</S.SortByOptionsItem>
          <S.SortByPrice>
            <option disabled value="">
              Price
            </option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </S.SortByPrice>
        </S.SortByOptions>
        {/* Page Controller */}
        <S.MiniPageController>
          <S.MiniPageControllerState>
            <S.MiniPageControllerCurrentState>1</S.MiniPageControllerCurrentState>/
            <S.MiniPageControllerTotalState>2</S.MiniPageControllerTotalState>
          </S.MiniPageControllerState>
          <S.ButtonControllerPrev>
            <SVGPrevIcon />
          </S.ButtonControllerPrev>
          <S.ButtonControllerNext>
            <SGVNextIcon />
          </S.ButtonControllerNext>
        </S.MiniPageController>
      </S.SortBar>
      {/* Product List */}
      <S.ProductList>
        {products?.map(product => {
          return <ProductItem key={product._id} productDetail={product} />
        })}
      </S.ProductList>
      {/* Pagination */}
      <Pagination />
    </div>
  )
}
SearchItemResult.propTypes = {
  products: PropTypes.shape({
    products: PropTypes.array,
    pagination: PropTypes.object
  })
}
