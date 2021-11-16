import React from 'react'
import PropTypes from 'prop-types'
export default function BaseInputNumber({ onChange, value, onBlur, ...props }) {
  // console.log(onChange, value)
  const handleChange = event => {
    const value = event.target.value
    const regexNumber = /^\d+$/
    if (regexNumber.test(value) || value === '') {
      onChange(value)
    }
  }
  const handleBlur = event => {
    const val = event.target.value
    onBlur && onBlur(val)
  }

  return <input type="text" onChange={handleChange} onBlur={handleBlur} value={value} {...props} />
}
BaseInputNumber.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
