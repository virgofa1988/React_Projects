import React from 'react'
import { SVGStarWithPercent } from 'src/assets/svgs/svg'
import * as S from './productRating.style'
import PropTypes from 'prop-types'
export default function ProductRating({ rating }) {
  const handleWidth = index => {
    const _index = index + 1
    if (_index <= rating) {
      // console.log('100%')
      return '100%'
    }
    if (0 < _index - rating && _index - rating < 1) {
      // console.log(`${(1 - (_index - rating)) * 100}%`)
      return `${(1 - (_index - rating)) * 100}%`
    }
    return '0%'
  }

  return (
    <S.RatingStarContainer>
      {Array(5)
        .fill(0)
        .map((star, index) => {
          return (
            <S.RatingStarWrapper key={index}>
              <S.RatingStarPercent style={{ width: handleWidth(index) }}>
                <SVGStarWithPercent />
              </S.RatingStarPercent>
              <SVGStarWithPercent />
            </S.RatingStarWrapper>
          )
        })}
    </S.RatingStarContainer>
  )
}

ProductRating.propTypes = {
  ratingStar: PropTypes.number
}
