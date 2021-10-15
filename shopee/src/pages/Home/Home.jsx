import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult'
import { getCategories, getProducts } from 'src/Redux/home.slice'
import * as S from './home.style'
export default function Home() {
  //State of Categories
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({})
  //Get Categories
  const dispatch = useDispatch()
  //Home Component did mount
  //Get Categories
  useEffect(() => {
    //using promise
    dispatch(getCategories())
      //error not return in .then(), switch it to .catch()
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data)
        console.log(res.data)
      })
  }, [])
  //Get Products
  useEffect(async () => {
    const data = await dispatch(getProducts())
    const result = unwrapResult(data)
    setProducts(result.data)
  }, [dispatch])

  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories} />
        </S.Side>
        <S.Main>
          <SearchItemResult productList={products} />
        </S.Main>
      </S.Container>
    </div>
  )
}
