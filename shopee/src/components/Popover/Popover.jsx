import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import * as S from './popover.style'
export default function Popover({active,children}) {
  return (
    <Fragment>
      {active && (
    <S.Drawer>
      <S.PopoverArrow/>
      <S.PopoverContent>
        {children}
      </S.PopoverContent>
    </S.Drawer>)}
    </Fragment>

  )
}

//Check value
Popover.propTypes = {
  active: PropTypes.bool,
  children:PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}