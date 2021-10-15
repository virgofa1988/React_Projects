import React from 'react'
import { SGVNextIcon, SVGPrevIcon } from 'src/assets/svgs/svg'
import * as S from './pagination.style'
export default function Pagination() {
  return (
    <div>
      <S.Pagination>
        <S.ButtonIcon>
          <SVGPrevIcon />
        </S.ButtonIcon>
        <S.ButtonNumberOutline className="active">1</S.ButtonNumberOutline>
        <S.ButtonNumberOutline>2</S.ButtonNumberOutline>
        <S.ButtonNumberOutline>...</S.ButtonNumberOutline>
        <S.ButtonIcon>
          <SGVNextIcon />
        </S.ButtonIcon>
      </S.Pagination>
    </div>
  )
}
