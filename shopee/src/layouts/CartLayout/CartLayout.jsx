import React from 'react'
import PropTypes from 'prop-types'
import HeaderCart from 'src/components/HeaderCart/HeaderCart'
import Footer from 'src/components/Footer/Footer'
export default function CartLayout({ children }) {
  return (
    <div>
      {/* Cart Layout has a different HeaderCart so need to create new layout */}
      <HeaderCart />
      {children}
      <Footer />
    </div>
  )
}
CartLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
