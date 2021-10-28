import React from 'react'
import { SGVNextIcon, SVGPrevIcon } from 'src/assets/svgs/svg'
import * as S from './pagination.style'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import { usePagination } from '@material-ui/lab'
import { path } from '../../constants/path'
import classNames from 'classnames'
import qs from 'query-string'
export default function Pagination({ pagination, filters }) {
  const history = useHistory()
  const { items } = usePagination({
    //Set value for MaterialUI-pagination from pagination props
    count: pagination.page_size || 0,
    page: pagination.page || 1
  })
  console.log(items)
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
  const goToPage = page => {
    const _filters = { ...filters, page }
    history.push(path.home + `?${qs.stringify(_filters)}`)
  }
  return (
    <div>
      <S.Pagination>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = (
              <S.ButtonNumberOutline disabled key={index}>
                ...
              </S.ButtonNumberOutline>
            )
          } else if (type === 'previous') {
            children = (
              <S.ButtonIcon key={index} onClick={goToPrev} disabled={pagination.page == 1}>
                <SVGPrevIcon />
              </S.ButtonIcon>
            )
          } else if (type === 'next') {
            children = (
              <S.ButtonIcon key={index} onClick={goToNext} disabled={pagination.page == pagination.page_size}>
                <SGVNextIcon />
              </S.ButtonIcon>
            )
          } else if (type === 'page') {
            children = (
              <S.ButtonNumberOutline
                key={index}
                className={classNames({ active: selected })}
                onClick={() => goToPage(page)}
              >
                {page}
              </S.ButtonNumberOutline>
            )
          }
          return children
        })}
      </S.Pagination>
    </div>
  )
}
Pagination.propTypes = {
  filters: PropTypes.object,
  pagination: PropTypes.object
}
