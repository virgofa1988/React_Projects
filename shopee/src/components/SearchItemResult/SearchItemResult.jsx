import React, { useEffect, useState } from 'react'
import { SGVNextIcon, SVGPrevIcon } from 'src/assets/svgs/svg'
import Pagination from '../Pagination/Pagination'
import ProductItem from '../ProductItem/ProductItem'
import * as S from './searchItemResult.style'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import qs from 'query-string'
import { path } from 'src/constants/path'
import classNames from 'classnames'
export default function SearchItemResult({ productList, filters }) {
  const { products, pagination } = productList
  //State control active sortBy
  //Solution 1 - I think
  // const [active, setActive] = useState(filters.sortBy)
  // //When filters change, will update again active state
  // useEffect(() => {
  //   setActive(filters.sortBy)
  // }, [filters.sortBy])
  //solotion 2 - Tutorial
  const handleActiveOptionSort = value => {
    return classNames({ active: value == filters.sortBy })
  }

  //When user sortby others feature like view, sold... reset the value of select to '', it will show option Price disabled
  const handleSortByPriceValue = () => {
    let value = `${filters.sortBy}:${filters.order}`
    if (value !== 'price:asc' && value !== 'price:desc') {
      value = ''
    }
    return value
  }
  //Handle Prev and Next Button
  const goToPrev = () => {
    if (pagination.page !== 1) {
      const _filters = { ...filters, page: pagination.page - 1 }
      history.push(path.home + `?${qs.stringify(_filters)}`)
    }
  }
  const goToNext = () => {
    if (pagination.page !== pagination.page_size) {
      const _filters = { ...filters, page: pagination.page + 1 }
      history.push(path.home + `?${qs.stringify(_filters)}`)
    }
  }

  // ------------
  const history = useHistory()
  //Handle sortBy View(Popular)
  const handleSortBy = (value, order) => {
    console.log({ value, order })
    const _filters = { ...filters, sortBy: value }
    //Default is desc, when chose minPrice or maxPrice => check order
    if (order) {
      _filters.order = order
    } else {
      delete _filters.order
    }

    history.push(path.home + `?${qs.stringify(_filters)}`)
  }
  return (
    <div>
      {/* Sort Bar */}
      <S.SortBar>
        <S.SortBarLabel>Sort by</S.SortBarLabel>
        <S.SortByOptions>
          <S.SortByOptionsItem
            className={handleActiveOptionSort('view')}
            onClick={() => {
              handleSortBy('view')
            }}
          >
            Popular
          </S.SortByOptionsItem>
          <S.SortByOptionsItem
            className={handleActiveOptionSort('createdAt')}
            onClick={() => {
              handleSortBy('createdAt')
            }}
          >
            New arrival
          </S.SortByOptionsItem>
          <S.SortByOptionsItem
            className={handleActiveOptionSort('sold')}
            onClick={() => {
              handleSortBy('sold')
            }}
          >
            Most sale
          </S.SortByOptionsItem>
          <S.SortByPrice
            className={handleActiveOptionSort('price')}
            // string to array by split(), then spread operator array to get value:price, and order:asc or desc
            onChange={event => handleSortBy(...event.target.value.split(':'))}
            value={handleSortByPriceValue()}
          >
            <option disabled value="">
              Price
            </option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
          </S.SortByPrice>
        </S.SortByOptions>
        {/* Page Controller */}
        <S.MiniPageController>
          <S.MiniPageControllerState>
            <S.MiniPageControllerCurrentState>{pagination.page}</S.MiniPageControllerCurrentState>/
            <S.MiniPageControllerTotalState>{pagination.page_size}</S.MiniPageControllerTotalState>
          </S.MiniPageControllerState>
          <S.ButtonControllerPrev onClick={goToPrev} disabled={pagination.page === 1}>
            <SVGPrevIcon />
          </S.ButtonControllerPrev>
          <S.ButtonControllerNext onClick={goToNext} disabled={pagination.page == pagination.page_size}>
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
      <Pagination pagination={pagination} filters={filters} />
    </div>
  )
}
SearchItemResult.propTypes = {
  products: PropTypes.shape({
    products: PropTypes.array,
    pagination: PropTypes.object
  }),
  filters: PropTypes.object
}
