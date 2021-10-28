import React from 'react'
import PropTypes from 'prop-types'
export default function BaseInputNumber({ onChange, value, ...props }) {
  // console.log(onChange, value)
  const handleChange = event => {
    const value = event.target.value
    const regexNumber = /^\d+$/
    if (regexNumber.test(value) || value === '') {
      onChange(value)
    }
  }

  return <input type="text" onChange={handleChange} value={value} {...props} />
}
BaseInputNumber.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
