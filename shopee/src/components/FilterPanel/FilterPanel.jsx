import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import { SVGCategoryIcon, SVGFilterIcon } from 'src/assets/svgs/svg'
import { path } from 'src/constants/path'
import RatingStars from '../RatingStars/RatingStars'
import * as S from './filterPanel.style'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { Controller, useForm } from 'react-hook-form'

export default function FilterPanel({ categories, filters }) {
  // console.table(categories)
  const history = useHistory()
  //Use react Hook Form to handle Min Price and Max Price
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    clearErrors,
    reset,
    setValue
  } = useForm({
    defaultValues: {
      minPrice: filters.minPrice || '',
      maxPrice: filters.maxPrice || ''
    },
    reValidateMode: 'onSubmit'
  })

  //Validate MinPrice and MaxPrice
  const validPrice = () => {
    const minPrice = getValues('minPrice')
    const maxPrice = getValues('maxPrice')
    const message = 'Please enter proper price range!'
    // if minPrice and maxPrice filled, then check >= (if wrong return error message)
    if (minPrice !== '' && maxPrice !== '') {
      return Number(maxPrice) >= Number(minPrice) || message
    }
    //If both minPrice and maxPrice empty return error (one of minPrice or maxPrise filled is no errors)
    return minPrice !== '' || maxPrice !== '' || message
  }

  //Handle Search Price
  //This searchPrice will receive the form data if form validation is successful
  //Set filters when we have filtering inputs from user
  const searchPrice = data => {
    const { minPrice, maxPrice } = data
    if (minPrice !== '' || maxPrice !== '') {
      let _filters = filters
      if (minPrice !== '') {
        _filters = { ..._filters, minPrice }
      } else {
        delete _filters.minPrice
      }
      if (maxPrice !== '') {
        _filters = { ..._filters, maxPrice }
      } else {
        delete _filters.maxPrice
      }
      //Update URL with new Filters Params
      history.push(path.home + `?${queryString.stringify(_filters)}`)
    }
  }
  //useEffect to keep filters when f5
  useEffect(() => {
    setValue('minPrice', filters.minPrice || '')
    setValue('maxPrice', filters.maxPrice || '')
  }, [filters])
  //Reset form
  const clearAll = () => {
    //reset form by reac-hook-form
    reset()
    //Reset URL
    history.push({ pathname: path.home })
  }
  return (
    <div>
      {/* Header of FilterPanel */}
      <S.CategoryLink to={path.home}>
        <SVGCategoryIcon />
        All Categories
      </S.CategoryLink>
      {/* Category List */}
      <S.CategoryList>
        {categories.map(category => {
          return (
            <S.CategoryItem key={category._id}>
              <NavLink
                isActive={(match, location) => {
                  // console.log({ match, location })
                  if (!match) return false
                  //getParams from URL to compare with current _id
                  const query = queryString.parse(location.search)
                  console.log(query)
                  return query.category === category._id
                }}
                to={path.home + `?category=${category._id}`}
              >
                {category.name}
              </NavLink>
            </S.CategoryItem>
          )
        })}
      </S.CategoryList>
      {/* Filter */}
      <S.CategoryTitle>
        <SVGFilterIcon />
        Filter
      </S.CategoryTitle>
      <S.FilterGroup>
        <S.FilterGroupHeader>Price Range</S.FilterGroupHeader>
        <S.PriceRange>
          <S.PriceRangeGroup>
            <Controller
              name="minPrice"
              control={control}
              rules={{ validate: { validPrice } }}
              render={({ field }) => (
                <S.PriceRangeInput
                  placehoder="From"
                  onChange={value => {
                    clearErrors()
                    field.onChange(value)
                  }}
                  value={getValues('minPrice')}
                />
              )}
            />

            <S.PriceRangeLine />
            <Controller
              name="maxPrice"
              control={control}
              rules={{ validate: { validPrice } }}
              render={({ field }) => (
                <S.PriceRangeInput
                  placehoder="To"
                  onChange={value => {
                    clearErrors()
                    field.onChange(value)
                  }}
                  value={getValues('maxPrice')}
                />
              )}
            />
          </S.PriceRangeGroup>
          {/* Render Messages */}
          {Object.values(errors).length != 0 && (
            <S.PriceErrorMessage>Please fill an appropriate range</S.PriceErrorMessage>
          )}
          {/* This handleSubmit will receive the form data if form validation is successful. */}
          <S.PriceRangeButton onClick={handleSubmit(searchPrice)}>Apply</S.PriceRangeButton>
        </S.PriceRange>
      </S.FilterGroup>
      {/* Rating */}
      <S.FilterGroup>
        <S.FilterGroupHeader>Rating</S.FilterGroupHeader>
        <RatingStars filters={filters} />
      </S.FilterGroup>
      {/* remove filter button */}
      <S.RemoveFilterButton onClick={clearAll}>Remove all filter</S.RemoveFilterButton>
    </div>
  )
}

FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired
}
