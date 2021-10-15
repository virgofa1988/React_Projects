import React from 'react'
import { Redirect } from 'react-router'
import { path } from 'src/constants/path'
import PropTypes from 'prop-types'
import { useAuthenticate } from '../../Hooks/useAuthenticate'
export default function AuthenticatedGuard({ children }) {
  //Check if user isLogined
  const authenticated = useAuthenticate()
  if (!authenticated) {
    return <Redirect to={path.login} />
  }
  return <>{children}</>
}
AuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
