import React from 'react'
import * as S from './errorMessage.style'
import PropsTypes from 'prop-types'
export default function ErrorMessage({errors,name}) {
  const error = errors[name]
  return (<S.ErrorMessage className="errorMessage">{error && error.message}</S.ErrorMessage>  )
}

ErrorMessage.propTypes = {
  errors:PropsTypes.object,
  name:PropsTypes.string
}