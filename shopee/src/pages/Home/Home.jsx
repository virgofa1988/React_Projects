import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult'
import useQuery from 'src/Hooks/useQuery'
import { getCategories, getProducts } from 'src/Redux/home.slice'
import * as S from './home.style'

export default function Home() {
  //State
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({
    products: [],
    pagination: {}
  })
  const [filters, setFilters] = useState({})

  const dispatch = useDispatch()

  //Custom Hook
  const query = useQuery()
  console.log(query)
  //Home Component did mount
  //Get Categories
  useEffect(() => {
    //using promise
    dispatch(getCategories())
      //error not return in .then(), switch it to .catch()
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data)
        // console.log(res.data)
      })
  }, [])
  //Get Products
  useEffect(() => {
    //Apply filter - Home Component will keep filters state and when URL change, Home will update filters. Base on filters, we use it to config API getProducts, to re-render productResultList
    const _filters = { ...query, page: query.page || 1, limit: query.limit || 30, sortBy: query.sortBy || 'view' }
    setFilters(_filters)
    //Back end define which param filter, so Front-end follow
    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      exclude: _filters.exclude,
      rating_filter: _filters.rating,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      order: _filters.order,
      name: _filters.name
    }
    //Load Product API based on filters
    const _getProduct = async () => {
      const data = await dispatch(getProducts({ params }))
      const result = unwrapResult(data)
      setProducts(result.data)
    }
    _getProduct()
    // When url change, query will change and componentDidUpdate
  }, [query, dispatch])

  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories} filters={filters} />
        </S.Side>
        <S.Main>
          <SearchItemResult productList={products} filters={filters} />
        </S.Main>
      </S.Container>
    </div>
  )
}
