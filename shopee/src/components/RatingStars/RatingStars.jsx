import React from 'react'
import { SVGEmptyStar, SVGFullStar } from 'src/assets/svgs/svg'
import * as S from './ratingStars.style'
export default function RatingStars() {
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((row, index) => {
          return (
            <S.RatingStarContainer key={index}>
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
