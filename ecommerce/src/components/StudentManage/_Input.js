import React from 'react'
import PropTypes from 'prop-types'
export default function Input({ type = 'text', onChange, value, ...props }) {
  const regexNum = /^\d+$/
  const handleChange = event => {
    const val = event.target.value
    // onChange(val)
    if (type === 'number') {
      //If input type is number, still allow user type string
      if (regexNum.test(val) || val === '') {
        //onChange here usually is setState
        onChange(val)
      }
    } else {
      onChange(val)
    }
  }

  return <input type={type === 'number' ? 'text' : type} value={value} onChange={handleChange} {...props} />
}

Input.protoType = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
}
