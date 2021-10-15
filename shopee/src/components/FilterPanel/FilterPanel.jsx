import React from 'react'
import { NavLink } from 'react-router-dom'
import { SVGCategoryIcon, SVGFilterIcon } from 'src/assets/svgs/svg'
import { path } from 'src/constants/path'
import RatingStars from '../RatingStars/RatingStars'
import * as S from './filterPanel.style'
import PropTypes from 'prop-types'
import queryString from 'query-string'

export default function FilterPanel({ categories }) {
  console.table(categories)
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
                  console.log({ match, location })
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
            <S.PriceRangeInput placehoder="From" />
            <S.PriceRangeLine />
            <S.PriceRangeInput placehoder="To" />
          </S.PriceRangeGroup>
          <S.PriceErrorMessage>Please fill an appropriate range</S.PriceErrorMessage>
          <S.PriceRangeButton>Apply</S.PriceRangeButton>
        </S.PriceRange>
      </S.FilterGroup>
      {/* Rating */}
      <S.FilterGroup>
        <S.FilterGroupHeader>Rating</S.FilterGroupHeader>
        <RatingStars />
      </S.FilterGroup>
      {/* remove filter button */}
      <S.RemoveFilterButton>Remove all filter</S.RemoveFilterButton>
    </div>
  )
}

FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired
}
