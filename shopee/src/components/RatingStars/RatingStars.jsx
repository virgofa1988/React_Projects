import React from 'react'
import { SVGEmptyStar, SVGFullStar } from 'src/assets/svgs/svg'
import * as S from './ratingStars.style'
import PropTypes from 'prop-types'
import { path } from 'src/constants/path'
import qs from 'query-string'
import { useHistory } from 'react-router'
import classNames from 'classnames'
export default function RatingStars({ filters }) {
  console.log(filters)
  const history = useHistory()
  const handleRatingStar = rating => {
    // console.log(rating)
    const _filters = { ...filters, rating }
    history.push(path.home + `?${qs.stringify(_filters)}`)
  }

  return (
    <div>
      {Array(5)
        .fill(0)
        .map((row, index) => {
          return (
            <S.RatingStarContainer
              key={index}
              onClick={() => handleRatingStar(5 - index)}
              //When filters.rating clicked, it's will = current rating
              className={classNames({ active: Number(filters.rating) == 5 - index })}
            >
              {Array(5)
                .fill(0)
                .map((star, indexStar) => {
                  if (indexStar < 5 - index) {
                    return <SVGFullStar key={indexStar} />
                  }
                  return <SVGEmptyStar key={indexStar} />
                })}{' '}
              {index !== 0 && <span>More</span>}
            </S.RatingStarContainer>
          )
        })}
    </div>
  )
}
RatingStars.propTypes = {
  filters: PropTypes.object.isRequired
}
